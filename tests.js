var assert = require('assert');
describe('BIN2DEC', function() {
  var BIN2DEC = require('./BIN2DEC');

  it('it should be there when you require it', function () {
    assert( typeof BIN2DEC !== undefined, 'not there for me');
  });

  it('it should transform a binary string into a number', function () {
    assert( BIN2DEC('00000000') === 0, 'not there for me');
    assert( BIN2DEC('00000001') === 1, 'not there for me');
    assert( BIN2DEC('00000010') === 2, 'not there for me');
    assert( BIN2DEC('00000100') === 4, 'not there for me');
    assert( BIN2DEC('00000101') === 5, 'not there for me');
    assert( BIN2DEC('1011111111') === -257, 'not there for me');
    assert( BIN2DEC('1111111111') === -1, 'not there for me');
  });

});
