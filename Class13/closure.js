// //Closure 

// var message =' Greetings and welcome to Closures, By the way what is closure'
// function Person(name){
//     //this -- {}
//     //this.name = name;

//     this.sayHello =  function(message){
//         console.log('Hi! ' + name + ' ' + message);
//     };
//     //return this
// }

// //Closure: Inner Function has access to  outer function variables and parameters  (scope) even after the outer function is executed 

// var name1 = 'john'
// var john = new Person('john');

// var rohit = new Person('rohit');

// john.sayHello(message);
// rohit.sayHello(message);
var out = 10;

function Person(name){
    //three scopres 
    //local, closure and global (order)
    //var out = 20;
    console.log(out);
   var age  = 10;
   console.log(age);
    function sayHello(message){
        var age = 40;
        debugger;
        console.log('Hi! ' + name + ' ' + message + '  age is ' + age );
    }

    return sayHello;
}

var name1 = 'john';
var sayHello1 = Person(name1);

//there should be no reference 
name1 = 'peter';
sayHello1('Greetings and welcome to Closures, By the way what is closure');

