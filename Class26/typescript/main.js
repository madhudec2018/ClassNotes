"use strict";
// let month = 'january';
exports.__esModule = true;
// const seondMonth = 'february';
// if(month === 'janaury'){
//     //
// }
//enum
var Month;
(function (Month) {
    Month["January"] = "january";
    Month["February"] = "february";
    Month["March"] = "march"; //2
})(Month || (Month = {}));
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["FieldUser"] = 1] = "FieldUser";
    Role[Role["CustomerServiceUser"] = 2] = "CustomerServiceUser";
})(Role || (Role = {}));
var month = Month.March;
var secondMonth = Month.February;
var d;
//some body wrote a library and they want to tell you parameters input and output 
function greet(message) {
    console.log("hello " + message);
}
greet("World");
var count = 0;
var Person = /** @class */ (function () {
    function Person() {
        this.counter = count++;
        //when you are creating instance. this is invoked
    }
    Person.prototype.greet = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
var john = new Person();
john.name = "John";
john.greet();
john.greet();
//
// plain javascript ot typescript 
// typings 
//$('h1').addClass('container')
var Car = /** @class */ (function () {
    function Car() {
        this.age = 40;
    }
    return Car;
}());
exports.Car = Car;
var firstCar = new Car();
firstCar.age = 100;
console.log(firstCar.age);
//console.log(firstCar['age']);//
//firstCar.myAge = 100;
//firstCar.age = 100;
//firstCar.setAge(30);
//const age = firstCar.getAge();
// set or change 
//console.log(age);
