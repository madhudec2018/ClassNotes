

//Two types of Functions 
//1) Function Declaration
// 2) Function Expression

//Hoisting 
console.log(name); //undefined 
var name = 'John';
console.log(name);
console.log(sum(1,2));//NaN
function sum(a,b){
    return a + b;
}
console.log(age);//undefined
var age = 20;
console.log(age);

function sum(a,b,c){
    return a + b +c;
}

console.log(add);//undefined 
//undefined is not a function --> error 
//function expression are not hoisted 
var add = function (a,b){
    return a + b;
}
add(1,2);//3
add = 10;
console.log(add);//10