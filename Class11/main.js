//let const 
var person = {
  name : 'John',
  YearOfBirth : 1990,
  getAge : function(){
      return 2018 - person.YearOfBirth;
  }
}

var age = person.getAge();

person['year of birth'] = 1995;

//iterate 
//== (equal to)
//!= (not equal to)
//=== equal 
//!==
for(var prop in person){
    if(person[prop]){
        if(person.hasOwnProperty(prop)){
            console.log(' prop is '+ prop + ' and it\'s value is '+ person[prop]);
        }
    }
}

//
//undefined, 0, '',false ---> false


