//modular programming 
// writing to independent modules to have clear separation of concerns 

$(function(){


   var calcs = [];
   $('.addnewCalc').click(function(){
      var calc = new Calculator();
      calcs.push(calc);
   }); 
 //  var firstCalc = new Calculator();


});