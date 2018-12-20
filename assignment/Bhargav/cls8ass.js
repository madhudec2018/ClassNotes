// 1st program
totalSalary(4567, 'B');
function totalSalary(n, q) {
    var grade = q;
    var basic = n;

  var  hra =0;
  var  da=0;
  var  pf=0;
  var allow = 0;
  var output=0;
  
hra=0.2*(basic);
da=0.5*(basic);
pf=0.11*(basic);

if (grade === 'A') {
    allow=1700;
}
else if(grade === 'B') {
    allow=1500;
}
else {
    allow=1300;
}
output = (basic) + (hra) + (da) + (allow) - (pf);
console.log(Math.round(output));
}

console.log('**************************');
// 2nd program
function sumEvenOdd(n) {
    var q = Array.from(n.toString()).map(Number);
    var c = [];
    var b = [];
    var total = 0;
    var count = 0;

    for (var i=0; i<q.length; i++) {
        if (q[i]%2 == 0) {
            c.push(q[i]);
        } else if (q[i]%2 !== 0) {
            b.push(q[i]);
        }
    }
    for (var j=0; j<c.length; j++) {
        total+=c[j];
    }
    for (var k=0; k<b.length; k++) {
        count+=b[k];
    }
    console.log(total, count);
}
sumEvenOdd(1234);

console.log('****************************');
// 3rd program
function power(x, n) {
    var c = x;
    var q = n;
    var b = 1;
    for (var i=1; i<=q; i++) {
        b*= c;
    }
    console.log(b);
}
power(2, 5);

console.log('*****************************');
// 4th program
function pattern4(N) {

    var i = 1;
    while(i<(N+1)) {
        var output = '';
        var j = 1;

        while(j<(i+1)) {
            output = output + 1;
            j++;
        }
        console.log(output);
        i++;
    }
}

pattern4(5);

console.log('**************************');
// 5th program
function pattern5(N) {
    var i = 1;
    while(i<(N+1)) {
        var output = '';
        
        for (var j=1; j<(i+1); j++) {
            if (i<=2) {
                output = output + 1; 
            } else if (j>=2 && j<i) {
                var k = 0;
                output = output + (k);
            } else {
                output = output + (i-1);
            }
        
        }
        console.log(output);
        i++;
    }
}
pattern5(5);

console.log('**************************');
// 6th program
function pattern6(N) {
    var i = 1;
    while(i<(N+1)) {
        var output = '';
        
        for (var j=1; j<(i+1); j++) {
            if (j>2 && j<i) {
                var k = 2;
                output = output + (k);
                // debugger;
            } else if (i===j) {
                var b = 1;
                output = output + (b);
            } 
            else {
                output = output + (j);
            }
        }
        console.log(output);
        i++;
    }
}

pattern6(5);

console.log('**************************');
// 7th program
function pattern7(N) {
    var i = 1;
    while((N+1)>i) {
        // debugger;
        var output = '';
        var j = 1;

        while(j<(N-i+2)) {
            output = output + (j);
            j++;
        }
        console.log(output);
        i++;
    }
}
pattern7(5);

console.log('**************************');
// 8th program
function pattern8(N) {
    var i = 0;
    while((N)>i) {
            // debugger;
        var output = '';
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    for (var j=0; j<i+1; j++) {
        output = output + arr[i];

        }
        console.log(output);
        i++;
    }
}
pattern8(3);
    
console.log('**************************');