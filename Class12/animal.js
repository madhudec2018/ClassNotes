var animal = {
    hasLife : true
}


function Mammal(){
    this.canWalk = true;
}
Mammal.prototype = animal;
var baseMammal  = new Mammal();

function Monkey(name){
    this.animalName = name;
    this.canClimbTrees = true;
}

//function.prototype
//function.call
//function.apply
//function.bind 

//prototype -- prototypical inheritnace 
Monkey.prototype = baseMammal;

var monkeyOne = new Monkey('bob');
console.dir(monkeyOne);


function Computer(){
 this.keyboardType = 'normal';
}

function SuperComputer(){
    this.cpu = '12cores';
    this.memory = '10000gb'
}
SuperComputer.prototype = Computer;


var mySuperComp = new SuperComputer();