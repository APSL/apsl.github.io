[![Build Status](https://travis-ci.org/APSL/apsl.github.io.svg?branch=master)](https://travis-ci.org/APSL/apsl.github.io)

# apsl.github.io

Source code for APSL GitHub page [apsl.github.io](http://apsl.github.io).

## Development

Tested with npm 3.4 and Node.js 4.2.

* `npm install`
* `npm start`
* Go to http://localhost:8080/

You can run `npm start -- --port=<port-number>` to use another port.

All commands:

* `npm test` : Run unit tests.
* `npm start` : Local server with development assets with hot reload.
* `npm run server-dev` : Local server with development assets without hot reload.
* `npm run build-dev` : Build development assets.
* `npm run server-prod` : Local server with production (minified) assets without hot reload.
* `npm run build-prod` : Build production assets in dist directory.

## Contribute

If you would like to contribute to the project, be it new features or
bugs, please do the following:

1. Fork the repository.
1. Create a new topic branch off the master branch that describe what it does.
1. Before commit, generate `dist` directory running `npm run build-prod`.
1. Commit and push the branch.
1. Make a pull request describing what you have done.
1. Now it will hopefully get merged :)

All pull requests should:

* Have all tests green.
* Use .eslintrc file to pass the [ESLint](http://eslint.org/) linter.
* Follow .editorconfig file rules. See [EditorConfig](http://editorconfig.org).
