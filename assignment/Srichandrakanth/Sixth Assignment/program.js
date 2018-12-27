/*First Program */
var sen = 'I am learning how to write code';
console.log(endsWith(sen, 'code'));
console.log(endsWith(sen, 'coding'));
console.log(endsWith(sen, 'write code'));

function endsWith(str, a) {
  if (str.substring(str.length - a.length) === a) {
    return true;
  }
  return false;
}
console.log('****************');
/*Second Program*/
var arr = [
  { startTime: 1, endTime: 5 },
  { startTime: 0, endTime: 1 },
  { startTime: 4, endTime: 5 },
  { startTime: 5, endTime: 7 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 }
];
mergeRanges(arr);
function mergeRanges(arr) {
  var numbers = [];
  var num = [];
  for (var z = 0; z < arr.length; z++) {
    numbers[z] = arr[z].startTime;
  }
  numbers.sort(function(a, b) {
    return a - b;
  });

  for (var l = 0; l < arr.length; l++) {
    for (var k = 0; k < arr.length; k++) {
      if (numbers[l] === arr[k].startTime) {
        num[l] = arr[k];
      }
    }
  }
  var arry = [];
  arry = num;

  for (var i = 0; i < num.length - 1; i++) {
    if (num[i + 1].startTime - num[i].endTime >= 1) {
      arry[i + 1].startTime = num[i + 1].startTime;
      arry[i + 1].endTime = num[i + 1].endTime;
    } else if (num[i + 1].startTime - num[i].endTime < 1) {
      arry[i + 1].startTime = num[i].startTime;
      if (num[i + 1].endTime - num[i].endTime >= 1) {
        arry[i + 1].endTime = num[i + 1].endTime;
      } else {
        arry[i + 1].endTime = num[i].endTime;
      }
    }
  }
  for (var j = 0; j < arry.length - 1; j++) {
    if (arry[j].startTime === arry[j + 1].startTime) {
      arry.splice(j, 1);
      j = j - 1;
    }
  }

  console.log(arry);
}
