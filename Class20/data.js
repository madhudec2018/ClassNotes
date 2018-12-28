
//On a html element I want to store some data 
$(function (){
    var userTextData = 100;
    var otherTextData = 50;
    
        //html element // secretly I want to store some data 
        //storing data on a html element 
       $('#userText').data({ secret: 100});
    
       //getting a data stored already
       var stored =  $('#userText').data();
       console.log(stored.secret);
    });
    