//this 
//object --> who is calling, obj -- this
//function declaration --> this --> window
//new -- this // new instance object 

//4) this depends on first argument passed for call, apply,bind 



var age = 10
var person = {
    age : 40,
    getAge:  function(){
       return  this.age;
    }
}

console.log(person.getAge());//40

var monkey = {
    age: 20
}

var displayAge = person.getAge;

console.log(displayAge());//10
console.log(person.getAge());//40
//
var displayAgeWithMonkeyBind = displayAge.bind(monkey);
console.log(displayAge());//10
var displayWithPersonAge = person.getAge.bind(person);

console.log(displayWithPersonAge());//40
console.log(displayWithPersonAge.call(monkey));//40
console.log(displayAgeWithMonkeyBind());//20
console.log(person.getAge());//40