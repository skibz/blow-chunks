
'use strict';

module.exports = function(array, size) {
  return [].concat.apply([], array.map(function(element, index) {
    return index % size ? [] : [array.slice(index, index + size)];
  }));
};
