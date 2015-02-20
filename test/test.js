var assert = require('assert');
var expect = require('chai').expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    })
  })
});

describe('Math', function() {
  describe('#max', function() {
    it('returns the biggest number from the arguments', function() {
      var max = Math.max(1, 2, 10, 3);
      expect(max).to.equal(10);
    });
  });
});
