
//some logic 




var bhargav = (function (){


    //variable  functional scope 

    var total = 10;


    //return total;
    var result = {
        getTotal : getTotal,
        process: process
    };

    return result;

    function getTotal(){
        return total;
    }

    function process(){
        // do somep rocess
        total = 1000;
        // 
    }

})();


console.log(bhargav.getTotal());//10
bhargav.process();
console.log(bhargav.getTotal());//1000
debugger;

//less chance of conflict these two files

//console.log(total);