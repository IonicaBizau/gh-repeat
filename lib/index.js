"use strict";

const EventEmitter = require("events").EventEmitter
    , ghRepos = require("gh-repos")
    , sameTime = require("same-time")
    ;

/**
 * ghRepeat
 * Run a repetitive action on multiple GitHub repositories.
 *
 * @name ghRepeat
 * @function
 * @param {String} selector If a GitHub owner (user or organization) is
 * provided, all accesible repositories will be matched. If a repository
 * full name is provided, only that specific repository will be matched.
 * @param {Function} doWhat A function which should return an object cocontaining:
 *
 *  - `url` (String): The GitHub API url.
 *  - `options` (Object): The options interpreted by [`gh.js`](https://github.com/IonicaBizau/gh.js).
 *
 * @param {String} token The GitHub token.
 * @param {Function} cb The callback function.
 * @returns {EventEmitter} An `EventEmitter` instance emitting the following events:
 *
 *  - `repo-error` (err, repo): Emitted if the request failed for a specific repository.
 *  - `repo-success` (data, repo): Emitted the request is successful.
 *  - `repo-progress` (err, data): Emitted running the request to a repository (if it was a success, the error will be `null`).
 *  - `done` (err, data): Emitted after all the requests are executed.
 */
module.exports = function ghRepeat(selector, doWhat, token, cb) {
    if (typeof token === "function") {
        cb = token;
        token = undefined;
    }
    var ev = new EventEmitter();
    ghRepos(selector, token, (err, repos, gh) => {
        if (err) { return cb(err); }
        sameTime(repos.map(c => done => {
            let cData = doWhat(c)
              , args = [cData.url]
              ;

            if (cData.options) {
                args.push(cData.options);
            }

            args.push((err, data) => {
                if (err) {
                    ev.emit("repo-error", err, c);
                } else {
                    ev.emit("repo-success", data, c);
                }
                ev.emit("repo-progress", err, data);
                done(err, { data: data, repo: c });
            });

            gh.get.apply(gh, args);
        }), (err, data) => {
            ev.emit("done", err, data);
        });
    });
    ev.on("done", cb);
    return ev;
};
