
// let month = 'january';

// const seondMonth = 'february';

// if(month === 'janaury'){
//     //
// }
//enum

enum Month { 
    January = "january" , //0
    February = "february", //10
    March = "march" //2
 }

 enum Role {
     Admin, //special enum values 
     FieldUser,
     CustomerServiceUser
 }

 
let month: Month = Month.March;
let secondMonth: Month = Month.February;


let d: any;
//some body wrote a library and they want to tell you parameters input and output 
function greet(message:string) : void{
  console.log("hello " + message);
}

greet("World");

let count :number = 0;
class Person {
  name : string;
  private counter: number;
  constructor(){
      this.counter = count++;
      //when you are creating instance. this is invoked
  }
  greet(){
      console.log("Hello "+ this.name);
  }
}

const john = new Person();
john.name = "John";
john.greet();
john.greet();



//

// plain javascript ot typescript 
// typings 

//$('h1').addClass('container')




