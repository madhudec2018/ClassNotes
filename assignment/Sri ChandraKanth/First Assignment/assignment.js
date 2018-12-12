console.log('*******************');
/*First Program */
printSalary(10000, 'A');

function printSalary(m, q) {
  var basic = m;
  var grade = q;
  var hra = basic * 0.2;

  var da = basic * 0.5;

  var pf = basic * 0.11;

  var allow = 0;
  if (grade === 'A') {
    allow = 1700;
  } else if (grade === 'B') {
    allow = 1500;
  } else {
    allow = 1300;
  }
  var totalSalary = basic + hra + da + allow - pf;
  var n = totalSalary % 1;
  if (n === 0) {
    console.log('Total salary is ' + totalSalary);
  } else if (n >= 0.5) {
    totalSalary = totalSalary + 1 - n;
    console.log('Total salary is ' + totalSalary);
  } else {
    totalSalary = totalSalary - n;
    console.log(totalSalary);
  }
}

console.log('*******************');
/* Second Program*/
sumOfEvenAndOdd(123456);

function sumOfEvenAndOdd(n) {
  var num = n;
  var m = n;
  var even = 0;
  var odd = 1;
  for (var i = 0; m > 1; m /= 10) {
    var q = m % 1;
    var u = q * 10;
    var l = u % 1;

    if (l === 0) {
      u = u;
    } else if (l > 0.5) {
      u = u + 1 - l;
    } else {
      u = u - l;
    }

    if (u % 2 === 0) {
      even = even + u;
    } else {
      odd = odd + u;
    }
    m = m - q;
  }

  console.log('Sum of Even numbers is ' + even);
  console.log('Sum of Odd numbers is  ' + odd);
}
console.log('*******************');
/* Third Program*/
power(10, 5);
function power(x, n) {
  var m = 1;
  for (var i = 0; i < n; i++) {
    m *= x;
  }
  console.log('The output is ' + m);
}
console.log('*******************');
/* Fourth Program*/
onesPattern(5);
function onesPattern(n) {
  var output = '';
  for (var i = 0; i < n; i++) {
    output += '1';
    console.log(output);
  }
}
console.log('*******************');
/* Fifth Program*/
secondPattern(5);
function secondPattern(n) {
  for (var i = 1; i <= n; i++) {
    var output = '';
    output += i;
    if (i === 1) console.log(output);

    for (var j = 1; j <= i; j++) {
      if (j < i) {
        output += '0';
      } else if (j === i) {
        console.log(output + j);
      }
    }
  }
}

console.log('*******************');
/* Sixth Program*/
thirdPattern(5);
function thirdPattern(n) {
  for (var i = 1; i <= n; i++) {
    var output = '';

    output += '1';
    if (i === 1) console.log(output);

    for (var j = 2; j <= i; j++) {
      if (j < i) {
        output += '2';
      } else if (j === i) {
        console.log(output + '1');
      }
    }
  }
}
console.log('*******************');
/* Seventh Program*/
fourthPattern(5);
function fourthPattern(n) {
  for (var i = n; i > 0; i--) {
    var output = '';
    for (var j = 1; j <= i; j++) {
      output += j;
    }
    console.log(output);
  }
}
console.log('*******************');
/* Eight Program*/
fifthPattern(5);
function fifthPattern(n) {
  var arr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  for (var i = 0; i < n; i++) {
    output = '';
    for (var j = 0; j <= i; j++) {
      output += arr[i];
    }
    console.log(output);
  }
}
