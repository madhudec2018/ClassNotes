//Four meaning for this in javascript 

//this is contextual, which context or who calls it , this meaning changes 

//1  when called a function inside object (obj.funct)

//var this = 'john';

var person = {

    name : 'John',
    birthYear : 1996,
    getAge : function(){
        //this -- object on which it is called
        //this -- obj 
        return 2018 - this.birthYear;
    }

}
console.log('person age is ' + person.getAge());//22

var manager = {
    birthYear: 1990
}
manager.name = person.name;
manager.getAge = person.getAge;
console.log('Manager age is ' + manager.getAge());//28
console.log(manager.city); //undefined


//2 Function declaration (this inside function declaration)
//this --> window object 
var age = 40;//window.age --> 40
//window.age = 70;//
function sum(){
    var age  = 60;
    return this.age;
}
//window.sum();
console.log('Sum is ' +sum());

//Scopes
