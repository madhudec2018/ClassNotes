//

function sum(a,b,c){

    //funcitons inside funcitons 
  
    function AddTwoNumbers(a,b){
        return a + b;
    }
  
    function AddThreeNumbers(a,b,c){
      return a + b + c;
    }
  
    if( a && b && c ){
        return AddThreeNumbers(a,b,c);
    }else if (a && b){
        return AddTwoNumbers(a,b);
    }else if(a){
        return a;
    }else {
        return 'Please pass parameters for adding';
    }
  
  
  }
  //window
  
  
  console.log(sum(1));//1
  console.log(sum(1,2));//3
  console.log(sum(1,2,3));//6
  console.log(sum());//


  

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

   
    var subtract = function(a,b,c){
        return a - b -c;
    }
    subtract(1,2);
    subtract(1,2,3)

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
