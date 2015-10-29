
# blow-chunks

> split an array into arbitrary length pieces

this doesn't modify the array prototype. which means you have to invoke it by using function.prototype.call, kinda sucks, but hey...

##### install

```bash
npm install --save blow-chunks
```

##### usage

```javascript
var chunk = require('blow-chunks');
chunk.call([1, 2, 3, 4, 5, 6], 2);
// [[1, 2], [3, 4], [5, 6]]
```
