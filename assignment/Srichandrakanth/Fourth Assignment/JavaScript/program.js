console.log('*********************');
/* First Program */
conversion(45, 'F');
function conversion(value, name) {
  if (name === 'C') {
    var outValue = 'F';
    var out = (value / 100) * 180 + 32;
  } else if (name === 'F') {
    var outValue = 'C';
    var out = (value - 32) * (1 / 180) * 100;
  }
  console.log(value + '°' + name + ' is ' + out + '°' + outValue);
}
console.log('*********************');
/* Second Program */
var arr = ['TeST', 'jAvaScript', 'coDe'];
camelCase(arr);
function camelCase(arry) {
  var out = '';
  var output = '';
  output = arry[0].toLowerCase();
  for (var i = 1; i < arry.length; i++) {
    out = arry[i].toLowerCase();
    var app = out.substring(1);
    var a = out.charAt(0).toUpperCase();
    output += a + app;
  }
  console.log(output);
}
console.log('*********************');
/* Third Program */
var items = [1, 6.5, 5];
var cash = 20;
calculateChange(items, cash);
function calculateChange(a, b) {
  var total = 0;
  for (var i = 0; i < a.length; i++) {
    total += a[i];
  }
  console.log(b - total);
}
