/* First Progranm*/
console.log('*********************');
console.log(reverse('Apple'));

function reverse(str) {
  var out = '';
  for (var i = 0; i < str.length; i++) {
    out += str[str.length - (i + 1)];
  }
  return out;
}
console.log('*********************');
/* Second Program */
var strg = 'radar';
var pd = reverse(strg);
if (pd === strg) {
  console.log('The given string is palindrome');
} else {
  console.log('The given string is not palindrome');
}
console.log('*********************');
/* Third Program */
var arr = [1, 3, 4, 5, 6];
console.log(check(arr));
function check(arry) {
  for (var i = 0; i < arry.length; i++) {
    if (arry[i] !== i + 1) {
      return i + 1;
    }
  }
}
console.log('*********************');
/* Fourth Program */
var num = [1, 6, 1, 3, 3, 2, 7, 2, 6];
num.sort(function(a, b) {
  return a - b;
});

nonDup(num);
function nonDup(nan) {
  var count = [];
  count[0] = 0;
  count[1] = nan[0];

  for (var i = 1; i < nan.length; i++) {
    if (nan[i] !== nan[i - 1]) {
      count.push(nan[i]);
    } else if (nan[i] === nan[i - 1]) {
      count.pop();
    }
  }
  var res = count.pop();
  console.log(res);
}
console.log('*********************');
/* Fifth Program */
var strg = 'This is a world population and this is world count';
var repl = 'global';
var toRepl = 'world';
replacing(strg, repl, toRepl);
function replacing(stg, wd, rd) {
  var index = 0;
  var out = '';

  for (var i = 0; i != -1; i = index) {
    stg = stg.replace(rd, wd);
    index = stg.indexOf(rd, i);
  }
  console.log(stg);
}
console.log('*********************');
/* Sixth Program */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
fistFive(arr);
function fistFive(az) {
  var out = '';
  for (var i = 0; i < 5; i++) {
    out += az[i];
  }
  console.log(out);
}
console.log('*********************');
/* Seventh Program */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
centerMost(arr);
function centerMost(az) {
  var num = Math.round(az.length / 2) - 1;
  az.splice(num, 1);
  console.log(az);
}
console.log('*********************');
/* Eight Program */
var arr = [44, 55, 77, 34, 56, 12, 9, 0, 11, 33];
minValue(arr);
function minValue(az) {
  var a = 0;
  var z = 0;
  while (z < az.length - 1) {
    for (var i = 0; i < az.length - 1; i++) {
      if (az[i + 1] < az[i]) {
        a = az[i];
        az[i] = az[i + 1];
        az[i + 1] = a;
        break;
      }
      z = i + 1;
    }
  }
  console.log(az.shift());
}
console.log('*********************');
/* Ninth Program */
var arr = [44, 55, 77, 34, 56, 12, 9, 0, 11, 33];
maxValue(arr);
function maxValue(az) {
  var a = 0;
  var z = 0;
  while (z < az.length - 1) {
    for (var i = 0; i < az.length - 1; i++) {
      if (az[i + 1] < az[i]) {
        a = az[i];
        az[i] = az[i + 1];
        az[i + 1] = a;
        break;
      }
      z = i + 1;
    }
  }
  console.log(az.pop());
}
