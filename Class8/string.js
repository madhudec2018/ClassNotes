var name = 'john';

name = "John";

//``backtick es6

//single quote 

//John's 

//name = "John's";
//name = 'John\'s';// \ is escape 

//name = 'John"s';
//name = "John\"s";

place = "Atlanta";

var output = name  +  " lives in " + place;
console.log(output);
// concatenation 

var age = 40;
//age  = 'John';
var ageAfter5Years = age + '5';

console.log(ageAfter5Years); //405
console.log(ageAfter5Years.length);//
//50 + ' canada '
//implicit typecasting -- converting one data type to another 

//Boolean 
var isValid = true;
isValid = false;


//Array
//storing multiple data in to a variable 
var marks = [90,91,92,89];//list or group of data 
//console.log(marks[0]);//o based index 
//marks[0] = 93;

//console.log(marks[0]);
//marks[1500] = 100;
//marks.length = 3000;
//console.log(marks.length);

//marks.length //4

//array 
//loop
//inititization; limit(condition) loop to break; increment/decrement 
//for(var i = 0, j =0; (i < marks.length && j < marks.length) ; i++,j++  )
for(var i = 0 ; i < marks.length ; i++){
    console.log( (i+1) + ' student got ' + marks[i])
}

var i = marks.length;
while( i > 0){
 console.log( (i) + " student got "+ marks[i-1])
 i--;//3 //2 //1//
}
 //i = (3 * 5) + 10
//array 

//push -- add to the last 
//pop -- remove the last 
//shift -- remove the first 
//unshift -- add to the first 

marks.push(100);
console.log(marks);
marks.pop();
console.log(marks);
marks.unshift(40);
console.log(marks);
marks.shift();
console.log(marks);

///arr
var arr = [10, 'john', true, 'peter', false];

//
var items = [0, true, false, 'false', '' , 1, 100, false];
//0, 2,4, 7
for(var j = 0; j < items.length; j++){
    var value = items[j];
    if(value == false){
        console.log('false found at '+ j + ' value is ' + value );
    }else {
        console.log(value + ' is not false');
    }
}
console.log('************Start of Second ********');
//'=='

//comparision but it automatically typecasts if the datatypes dont match

//===
for(var j = 0; j < items.length; j++){
    var value = items[j];
    if(value === false){
        console.log('false found at '+ j + ' value is ' + value );
    }else {
        console.log(value + ' is not false');
    }
}
//=== compare the values
//true if values are equal and   datatypes are equal

//Given a number N, print sum of all even numbers from 1 to N.

//6
// 1 2 3  4 5 6
// 2 + 4 +6 = 12 

//8 
// 1 2 3 4 5 6 7 8
// 20

function sum(a,b){
    console.log(a + b);//3 
}

sum(1,2); //3 
sum(2,3);//calling this funciton
sum(4,5);//9
