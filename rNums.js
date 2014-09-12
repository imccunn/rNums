(function() {
  'use strict';
  
  // Basic implementation of obtaining a random integer within a range
  function rInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // basic implementation of obtaining a float within a range
  function rFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  
})();
