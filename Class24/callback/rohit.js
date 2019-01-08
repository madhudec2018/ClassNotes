 var rohit = {

    buyProductFromTarak: function(){
        var rohitSuccessCB = function(){

        }

        var rohitErrorCB = function(){

        }
        tarak.purchase('keyboard', 'windsor',rohitSuccessCB, rohitErrorCB)
    }
 }

 //e --> d --> c --> b --> a 
 //callback hell 

 //Promises