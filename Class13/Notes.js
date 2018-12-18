
var myName = 'Peter';
var person = {
    myName: 'John',
    getAge : function(birthYear, currentYear){
        var age = currentYear - birthYear;
        return this.myName + ' age is ' + age ;
    }
}

var monkey = {
    myName: 'MonKeyA'
}

var dog = {
    myName : 'Hatchi'
}

//person.getAge();//40
console.log(person.getAge(1970,2018));//48
//person.getAge.call(contextOfThis,param1,param2)
console.log(person.getAge.call(monkey,1990,2018));
console.log(person.getAge.call(undefined,1990,2018));
console.log(person.getAge.call(dog,2017,2018));
var args = [1990,2018]; ///array 
console.log(person.getAge.apply(monkey,args));
//console.log(person.getAge.apply(monkey));
console.log(person.getAge(1970,2018));//48


/***************************Pass by Value and Reference*/


// function sum(x,y){
//     //string,number,boolean //copy of the variable passed 
//     //x -- 10
//     //y --- 20
//   x = 100;
  
//   return x + y;
// }

function sum(a,b){
    //string,number,boolean //copy of the variable passed 
    //x -- 10
    //y --- 20
  a = 100;
  
  return a + b;
}
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



