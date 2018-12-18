function reverseString (n) {
    var q = n.split("");
    var rev = q.reverse();
    var b = rev.join(" ");
    console.log(b);
}
reverseString("bhargav");

console.log('***************************');

function palindrome(n) {
    var s = n;
    var d = n.split("");
    var e = d.join(" ");
    var q = s.split("");
    var rev = q.reverse();
    var b = rev.join(" ");
    if (b === e) {
        return true;
    }
    else {
        return false;
    }
}
console.log(palindrome("radar"));

console.log('*******************************');

function missingNumber(n) {
    var q = n;
    for (var i=0; i<q.length; i++) {
        if ((q[i+1] - q[i])!== 1) {
            return (q[i+1] - 1);
        }
    }
}

console.log(missingNumber([1,2,3,4,5,7]));

console.log('********************************');

var num = [1,6,1,3,3,2,7,2,6];
num.sort(function(a, b) {
    return a - b;
});
function nonduplicatenum(n) {
    var q = n;
    var count = [];
    count[0] = 0;
    count[1] = q[0];

    for (var i = 1; i<q.length; i++) {
        
        if (q[i] !== q[i-1]) {
            count.push(q[i]);
        } else if (q[i] == q[i-1]) {
                count.pop();
        }
    }
    var c = count.pop();
    console.log(c);
}
nonduplicatenum(num);

console.log('*********************************');

function replaceMatches(n) {
    var q = n;
    var c = q.replace(/world/g, "global");
    console.log(c);
}

replaceMatches("This is a world population and this is world count");

console.log('********************************');

function first5elements(n) {
    var q = n;
    var c = q.slice(0,5);
    console.log(c); 
}
first5elements([0,2,3,5,4,6,4,7,8,9,1]);

console.log('*******************************');

function removecenterelem(n) {
    var q = n;
    var b = q.length-1;
    var c = Math.round(b/2);
    q.splice(c, 1);
    return q;
}

console.log(removecenterelem([1,2,3,4,5,6,7,8,9]));

console.log('******************************');

function Minimum(n) {
    var q = n;
    var min = Infinity;
    for (var i=0; i<q.length; i++) {
        if (q[i] < min) {
            min = q[i];
        }
    }
    console.log(min);
}

Minimum([1,12,3,10,7,8,9,4,5]);

console.log('*****************************');

function Maximum(n) {
    var q = n;
    var max = -Infinity;
    for (var i=0; i<q.length; i++) {
        if (q[i] > max) {
            max = q[i];            
        }
    }
    console.log(max);
}

Maximum([1,12,3,10,7,8,9,4,5]);

console.log('*****************************');
