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
    for (var i = 0; i < 100; i++) {
      var int = rNum.int(-50, -20);
      expect(int).to.be.below(-19);
      expect(int).to.be.at.least(-50);
    }
    done();
  });
  it('float: should return a value inside a given range', (done) => {
      var int = rNum.float(1, 9, 2);
      expect(int).to.be.below(10);
      expect(int).to.be.at.least(1);
    done();
  });
  it('float: should return the correct precision', (done) => {
      var int = rNum.float(1, 9, 2);
      expect(int.toString().length).to.be.below(5)
    done();
  });
});
