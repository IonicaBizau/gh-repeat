
# gh-repeat

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/gh-repeat.svg)](https://www.npmjs.com/package/gh-repeat) [![Downloads](https://img.shields.io/npm/dt/gh-repeat.svg)](https://www.npmjs.com/package/gh-repeat)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`fork-me`](https://github.com/IonicaBizau/fork-me#readme)—Delete multiple GitHub repositories.
 - [`gh-destroy`](https://github.com/IonicaBizau/gh-destroy#readme)—Delete multiple GitHub repositories.
 - [`gh-fork`](https://github.com/IonicaBizau/gh-fork#readme)—Forks the specified repositories in a known account.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
