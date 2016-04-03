"use strict";

const ghRepeat = require("../lib");

ghRepeat("ionicabizau", cRepo => {
    return {
        url: `repos/${cRepo.full_name}/languages`
    }
}, "an optional token", (err, data) => {
    /* when everything is done */
    console.log(
        err
     || data.map(
            c => c.repo.full_name + ": " + Object.keys(c.data).join(", ")
        ).join("\n")
    );
    // =>
    // IonicaBizau/3x3-equation-solver: JavaScript
    // IonicaBizau/add-subtract-date: JavaScript
    // ...
    // IonicaBizau/before-leaving-me.js: CSS, JavaScript, HTML
    // ...
    // IonicaBizau/gif-recorder: JavaScript, HTML, CSS, Shell
    // ...
    // IonicaBizau/youtube-topmost: JavaScript, CSS, HTML, Shell
});
