//global and functional scope and not a block scope 
// closure 
//es6 
var first = 100;
var third = 30;
function add(){
    //function scope 
    var first = 10;
    var second = 20;
 
    console.log(first);//10
    console.log(third);//30
}

try{
    console.log(first);//100
    add();
    //error 
    console.log(second);//
    console.log(first);//100
} catch(e){
  console.log('error');
}
console.log('some thing else')