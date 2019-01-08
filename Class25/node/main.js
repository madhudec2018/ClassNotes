var _ = require('lodash');
var diff = require('./diff');//relative to your folder 
var fs = require('fs');
var mult = require('./math/mult');

function sum(x,y){
    return x+y;
}

var result = sum(1,2);
console.log(result);

var person = {
    name : 'peter',
    age: 40
};
console.dir(person);

var keys = _.keys(person);
console.log(keys);



fs.readFile('./notes.txt','utf8',function(error,data){
    console.log(data);
});




