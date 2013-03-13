
# load-script

  Component: check whether a DOM click event would open in a new tab.

## Installation

    $ component install segmentio/is-meta

## Example
    
```js
var isMeta = require('is-meta');

a.onclick = function (event) { 
  isMeta(event); // true or false
};
```

## License

  MIT
