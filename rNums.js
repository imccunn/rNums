var r = (function() {
  'use strict';
  
  // ****************************************
  // Basic implementation of obtaining a random integer within a range
  //
  //
  // @params min, max
  // @return 
  
  function int(min, max) {
    
    return Math.floor(Math.random() * (max - min) + min);
    
  }
  
  // ****************************************
  // basic implementation of obtaining a float within a range
  //
  //
  // @params min, max, precision
  // @return 
  
  function float( min, max, precision ) {
    
    return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
    
  }

  // ****************************************
  // amp - 
  //
  //
  // @params precision
  // @return 
  
  function amp( precision ) {

    var prec = precision || 4;

    return parseFloat((Math.random() * 2 - 1).toFixed(prec));
    
  }
  
  // ****************************************
  // seedRand - seeded random number 
  //
  //
  // @params seed
  // @return 
  
  function seedRand( s ) {
    
      var x = Math.sin(s) * 10000;
      
      return x - Math.floor(x);
  }
  
  return {
    rInt: rInt,
    rFloat: rFloat,
    rAmp: rAmp
  }

})();
