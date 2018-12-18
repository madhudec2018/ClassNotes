


// function makeChairs(){

//     var chairs = [];

//     for(var i = 0; i < 10; i++){
//         var chair = function(message){
//             console.log( message + ' : ' + i);//make 
//         };
//         chairs.push(chair);
//     }
//     return chairs;
// }


// var readyChairs = makeChairs();

// var firstReadyChair = readyChairs[0];

// firstReadyChair('first');
// var secondReadyChair = readyChairs[0];

// secondReadyChair('second');



function makeChairs(){

    var chairs = [];

    for(var i = 0; i < 10; i++){
        var chair = (function(i){
            console.log(i);//make 
        })(i)
        chairs.push(chair);
    }
    i = 100;
    return chairs;
}


var readyChairs = makeChairs();

var firstReadyChair = readyChairs[0];

firstReadyChair();
var secondReadyChair = readyChairs[0];

secondReadyChair();
