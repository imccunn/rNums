var chai = require('chai');
var expect = chai.expect;
var rNum = require('../index.js');
describe('check', () => {
  it('should work', (done) => {
    expect(1).to.equal(1);
    done();
  });

  it('should return a value inside a given range', (done) => {
    for (var i = 0; i < 100; i++) {
      var int = rNum.int(1, 10);
      expect(int).to.be.below(11);
      expect(int).to.be.at.least(1);
    }
    done();
  });

  it('should return a value inside a given range for negative values', (done) => {
    var int = rNum.int(-50, -20);
    expect(int).to.be.below(-21);
    expect(int).to.be.at.least(-50);
    done();
  });
});
