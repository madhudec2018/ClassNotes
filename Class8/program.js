
function printEvenOfN(n){
    var count = 0;
    for(var i = 1; i <= n; i ++){
        if( i % 2 === 0){
            count += i;
        }
    }
    console.log(count);

}

printEvenOfN(6);
printEvenOfN(8);
printEvenOfN(10000);


/**
 * 4
 * 1
23
345
4567
 */

 function printPattern(n){

    var i = 1;
    while( i <  (n + 1)){ //
        //i < 5 // 1,2,3,4
        debugger;
        var output = '';
        var j = 1;
        
        //i = 3
        // j =1,2,3, -- 4 
        while(j  <  (i + 1)){
            // i = 3, j = 1 
            output = output + (j + i - 1);
            j++;
        }
        console.log(output);
        i++;
    }
 }

 printPattern(3);