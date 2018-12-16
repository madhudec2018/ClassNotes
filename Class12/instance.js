
//Instance 
// Object Oriented like 
//Prototypal Inheritance 

//Human beings -- cars, toys 

//Design, Model, Prototype -- paper -- Class ()

//objects from the design -- instance of Class --> (object )

// memory for all the things will be crated 

//functions (es6)

//class like thing 

//delcartion 
//var person = {};

function Bike(){
    //this --> {}
    var name = 'Yamaha';

    //return this;
}

var rohitBike = new Bike();

function Car(owner){
 //this -- {}

 this.carName = 'BMW';
 this.engine = 'v6';
 this.color = 'black';
 this.ownerName = owner;
 this.steer = function(){
     console.log( this.ownerName + ' is Steering! ' );
 }
 //
 //return this 
}

var bhargavCar = new Car('bhargav');//instance of class 
console.log(bhargavCar.color);//black 
bhargavCar.color = 'red';
console.log(bhargavCar.color);
var rohitCar = new Car('rohit');
console.log(rohitCar.color);
var chandrakanthCar = new Car('chandrakanth');
console.log(chandrakanthCar.color);

rohitCar.steer();