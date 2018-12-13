
var city = {
   name : 'Atlanta',
   location: '90"E 98"N',
   population: '1000000'
}



//iterate all the keys in object
for(var prop in  city){
    console.log( 'key is '+ prop + ' value is '+ city[prop]);
}

//city.name
//city['name']\


//function declaration 

var e = sum(1,2);//

function sum(a,b){
    //a - 1, b undefined
    //1 + undefined;
    //NaN (specific value of Number)
    //Not a Number
    return a + b;
}

function add(){
 //arguments// object not an array // array like object
  var total = 0;
 for(var i = 0 ; i < arguments.length; i++){
  total += arguments[i];
 }

 return total;
 //for 


}

add(1,2,3);//6
add(1,2,3,4);//10

//var c = sum(1,2);

//var d = sum(1);// NaN



