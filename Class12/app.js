

//Inheritance 
//Classical Inheritance 
//Prototypal Inheritance 

//vehilce ,car , bme

var vehicle = {
    isDrivable : true 
}


function Car(carName){
    this.carName = carName;
    this.hasMotor = true;
}

Car.prototype = vehicle;
var rohitCar = new Car('BMW');
var bhargavCar = new Car('Audi');
console.log(rohitCar.isDrivable);
vehicle.isComfortable = true;
//Object 
for(var prop in rohitCar){
    // if(rohitCar.hasOwnProperty(prop)){
        console.log( prop + ':' + rohitCar[prop]);
    // }
}

//Object

//reference 

function add(a,b){
    return a + b;
}
add.toString = function(){
    return 'It is my logic I dont want to share';
}
console.log(add);