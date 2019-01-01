$(function() {
  var calcs = [];
  $('.addnewCalc').click(function() {
    var calc = new Calculator();
    calcs.push(calc);
  });
});
