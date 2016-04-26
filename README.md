
# gh-repeat [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/gh-repeat.svg)](https://www.npmjs.com/package/gh-repeat) [![Downloads](https://img.shields.io/npm/dt/gh-repeat.svg)](https://www.npmjs.com/package/gh-repeat) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Repetitive actions on multiple GitHub repositories.

## :cloud: Installation

```sh
$ npm i --save gh-repeat
```


## :clipboard: Example



```js
const ghRepeat = require("gh-repeat");

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
```

## :memo: Documentation


### `ghRepeat(selector, doWhat, token, cb)`
Run a repetitive action on multiple GitHub repositories.

#### Params
- **String** `selector`: If a GitHub owner (user or organization) is provided, all accesible repositories will be matched. If a repository
full name is provided, only that specific repository will be matched.
- **Function** `doWhat`: A function which should return an object cocontaining:
 - `url` (String): The GitHub API url.
 - `options` (Object): The options interpreted by [`gh.js`](https://github.com/IonicaBizau/gh.js).
- **String** `token`: The GitHub token.
- **Function** `cb`: The callback function.

#### Return
- **EventEmitter** An `EventEmitter` instance emitting the following events:
 - `repo-error` (err, repo): Emitted if the request failed for a specific repository.
 - `repo-success` (data, repo): Emitted the request is successful.
 - `repo-progress` (err, data): Emitted running the request to a repository (if it was a success, the error will be `null`).
 - `done` (err, data): Emitted after all the requests are executed.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`fork-me`](https://github.com/IonicaBizau/fork-me#readme)—Delete multiple GitHub repositories.
 - [`gh-destroy`](https://github.com/IonicaBizau/gh-destroy#readme)—Delete multiple GitHub repositories.
 - [`gh-fork`](https://github.com/IonicaBizau/gh-fork#readme)—Forks the specified repositories in a known account.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
