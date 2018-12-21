// 1st program
var num = [0, 7, 2, 5, 4, 7, 1, 3, 6];
num.sort(function(a, b) {
    return a - b;
}); 
function duplicatenum(n) {
    var q = n;
    var count = [];
    count[0] = 0;

    for (var i = 1; i<q.length; i++) {   
        if (q[i] === q[i-1]) {
            count.push(q[i]);
        }
    }
    var c = count.pop();
    console.log(c);
}
duplicatenum(num);

console.log('***********************');

// 2nd program
function Intersection(arr1, arr2) {
    var a = arr1;
    var b = arr2;
    var count = [];

    for (var i=0; i<a.length; i++) {
        for (var j=0; j<b.length; j++) {
            // debugger;
            if (a[i] === b[j]) {
                count.push(a[i]);
            }
        }
    }
    for (var k=0; k<count.length; k++) {
        console.log(count[k]);
    }
}
Intersection([2, 6, 8, 5, 4, 3], [2, 3, 4, 7]);

console.log('******************************');

// 3rd program
function pairSum(arr, sum) {
    var q = arr;
    var b = sum;
    var c = q;
    
    for (var i=0; i<q.length; i++) {
        // debugger;
        for (var j=i+1; j<c.length; j++) {
           if (q[i] === (b-c[j])) {
               if (q[i]>c[j]) {
                   console.log(c[j], q[i]);
               } else {
              console.log(q[i], c[j]);
        } 
    }
    }
}
}
pairSum([1, 3, 6, 2, 5, 4, 3, 2, 4], 7);

console.log('****************************');
