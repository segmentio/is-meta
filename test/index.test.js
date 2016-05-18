'use strict';

var assert = require('proclaim');
var isMeta = require('../lib');

describe('is-meta', function() {
  it('should work (smoke test)', function() {
    assert.strictEqual(typeof isMeta, 'function');
  });
});
