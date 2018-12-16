
function add(a,b,c){

    return sum(a,b);
    var sum = function(a,b){
        return a + b;
    }

    function sum(a,b) {
        return 10 + a + b;
    }

    var sum = function(a,b){
       return 20 + a + b;
    }
}

add(1,4);

//
function sum(a, b, c, d) {


    
    function add(a,b){
        return  a + b;
    }

    function add(a,b,c){
        return a + b + c;
    }

   return add (a,b);
}

sum(1,2,3);//NaN




function sum2(a, b, c, d) {

    return add(a,b);
    
    function add(a,b){
        return  a + b;
    }

    function add(a,b,c){
        return a + b + c;
    }

   
}

sum2(1,2,3);//6
sum2(1,5,6,7);//12

function sum3(a, b, c, d) {
//var subtract;
//function add(a,b){
    //return a + b;
//}
    console.log(substract);
    var subtract = function(a,b){
        return a - b;
    }

    return subtract(a , b, c);
    function add(a,b){
        return  a + b;
    }

   var subtract = function(a,b,c){
       return a - b -c;
   }

   
}

console.log(sum3(5,4));



function substract(a,b){
    console.log('First Line');
    return a - b;
    console.log('Inside Subtract');

}

console.log(substract(4,2));
