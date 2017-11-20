var $ = (function () {
    
  // Keep this variable private inside this closure scope
  var myGrades = [93, 95, 88, 0, 55, 91];

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    id: function(elementId) {
      var element = document.getElementById(elementId);
      return element;
    }
  }
})();

