
'use strict';

var expect = require('chai').expect;
var chunk = require('../index');

describe('chunk', function() {
  it('should work for even chunkings', function() {
    var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var expected = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
    expect(chunk(input, 2)).to.deep.equal(expected);
  });
  it('should work for non-even chunkings', function() {
    var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
    expect(chunk(input, 3)).to.deep.equal(expected);
  });
  it('shouldn\'t freak out with zero-length arrays', function() {
    var input = [];
    var expected = [];
    expect(chunk(input, 2)).to.deep.equal(expected);
  });
  it('shoudln\'t freak out for negative chunk lengths', function() {
    var input = [];
    var expected = [];
    expect(chunk(input, -1)).to.deep.equal(expected);
  });
});
