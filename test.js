var test = require('tape');
var BIN2DEC = require('./BIN2DEC');

test('it should be there when you require it', function (t) {

  t.plan(7)
  t.equal( BIN2DEC('00000000') === 0, 'not there for me');
  t.equal( BIN2DEC('00000001') === 1, 'not there for me');
  t.equal( BIN2DEC('00000010') === 2, 'not there for me');
  t.equal( BIN2DEC('00000100') === 4, 'not there for me');
  t.equal( BIN2DEC('00000101') === 5, 'not there for me');
  t.equal( BIN2DEC('1011111111') === -257, 'not there for me');
  t.equal( BIN2DEC('1111111111') === -1, 'not there for me');

});
