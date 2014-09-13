(function() {
  'use strict';
  
  // ****************************************
  // Basic implementation of obtaining a random integer within a range
  //
  //
  // @params min, max
  // @return 
  
  function rInt( min, max ) {
    
    return Math.floor(Math.random() * (max - min) + min);
    
  }
  
  // ****************************************
  // basic implementation of obtaining a float within a range
  //
  //
  // @params min, max, precision
  // @return 
  
  function rFloat( min, max, precision ) {
    
    return (Math.random() * (max - min) + min).toFixed(precision);
    
  }

  // ****************************************
  // rAmp - 
  //
  //
  // @params precision
  // @return 
  
  function rAmp( precision ) {
    
    return (Math.random() * 2 - 1).toFixed(precision);
    
  }
  
})();
