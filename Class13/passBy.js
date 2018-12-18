
function sum(x,y){
    //string,number,boolean //copy of the variable passed 
    //x -- 10
    //y --- 20
  x = 100;
  
  return x + y;
}

// function sum(a,b){
//     //string,number,boolean //copy of the variable passed 
//     //x -- 10
//     //y --- 20
//   a = 100;
  
//   return a + b;
// }
var a = 10;
var b = 20;
console.log(a);//10
console.log(sum(a,b));//120
console.log(a);//10
//for simple datatypes like number,string -- pass by value or copy by value 

//for large objects like obj or array 
//pass by reference 
var person =  {
    age : 10
}

console.log(person.age);//10

function increaseAge(obj){
    obj.age = obj.age + 20;
    return obj;
}

var outputObj = increaseAge(person);
console.log(outputObj.age);
console.log(person.age);//copy by reference 



