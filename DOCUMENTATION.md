## Documentation

You can see below the API reference of this module.

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

