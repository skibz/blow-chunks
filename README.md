
# blow-chunks [![Build Status](https://travis-ci.org/skibz/blow-chunks.svg)](https://travis-ci.org/skibz/blow-chunks) [![Code Climate](https://codeclimate.com/github/skibz/blow-chunks/badges/gpa.svg)](https://codeclimate.com/github/skibz/blow-chunks) [![Test Coverage](https://codeclimate.com/github/skibz/blow-chunks/badges/coverage.svg)](https://codeclimate.com/github/skibz/blow-chunks/coverage)

> split an array into arbitrary length [pieces](http://www.urbandictionary.com/define.php?term=blow+chunks)

this doesn't modify the array prototype. which means you have to invoke it by using function.prototype.call, kinda sucks, but hey...

##### install

```bash
npm install --save blow-chunks
```

##### usage

```javascript
var chunk = require('blow-chunks');
chunk([1, 2, 3, 4, 5, 6], 2);
// [[1, 2], [3, 4], [5, 6]]
```
