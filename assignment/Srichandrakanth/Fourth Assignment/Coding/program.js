/* First Program */
console.log('**************');
arr = [0, 7, 2, 5, 4, 7, 1, 3, 6];
dulpicate(arr);
function dulpicate(arry) {
  var out = 0;
  var output = 0;
  for (var i = 0; i < arry.length; i++) {
    out = arry[i];
    for (var j = i + 1; j < arry.length; j++) {
      if (arry[i] === arry[j]) {
        output = arry[i];
      }
    }
  }
  console.log(output);
}

console.log('**************');
/* Second Program */
var arr1 = [2, 6, 8, 5, 4, 3];
var arr2 = [2, 3, 4, 7];
interSection(arr1, arr2);
console.log('**************');
var arr3 = [2, 6, 1, 2];
var arr4 = [1, 2, 3, 4, 2];
interSection(arr3, arr4);
function interSection(arry1, arry2) {
  var out = 0;

  for (var i = 0; i < arry1.length; i++) {
    out = arry1[i];
    var output = 'no value';
    for (var j = 0; j < arry2.length; j++) {
      if (arry1[i] === arry2[j]) {
        output = arry1[i];
      }
    }
    if (output !== 'no value') {
      console.log(output);
    }
  }
}
console.log('**************');
/* Third Program */
var arr = [1, 3, 6, 2, 5, 4, 3, 2, 4];
var pairSum = 7;
pairSumValue(arr, pairSum);
function pairSumValue(arry, value) {
  var out = 0;

  for (var i = 0; i < arry.length; i++) {
    out = arry[i];

    for (var j = i; j < arry.length; j++) {
      if (arry[i] + arry[j] === 7) {
        var output = 'no value';
        if (arry[i] < arry[j]) {
          output = arry[i] + ' ' + arry[j];
        } else {
          output = arry[j] + ' ' + arry[i];
        }
        if (output !== 'no value') {
          console.log(output);
        }
      }
    }
  }
}
