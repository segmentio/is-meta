# is-meta

[![CircleCI](https://circleci.com/gh/segmentio/is-meta.svg?style=shield&circle-token=430aa7c3639f1b4e06f25f7801362469f008a535)](https://circleci.com/gh/segmentio/is-meta)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/is-meta/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/is-meta)

Checks whether a DOM `click` event should open a link in a new tab.

## Installation

```sh
$ npm install @segment/is-meta
```

## Example
    
```js
var isMeta = require('is-meta');

a.onclick = function (event) { 
  isMeta(event); // true or false
};
```
