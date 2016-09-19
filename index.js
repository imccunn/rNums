'use strict';

module.exports = {
  int,
  float,
  amp,
  seedRand
};

function int(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
  
function float(min, max, precision) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
}

function amp(precision) {
  var prec = precision || 4;
  return parseFloat((Math.random() * 2 - 1).toFixed(prec));
}
  
function seedRand( s ) {
  var x = Math.sin(s) * 10000;
  return x - Math.floor(x);
}
  
