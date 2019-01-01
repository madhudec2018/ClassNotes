//modular programming 
// writing to independent modules to have clear separation of concerns 

$(function(){
   $('#btn1').click(function(){
      var calc = new Calculator();
      if (!($('.modal.in').length)) {
         $('.modal-dialog').css({
           top: 0,
           left: 0
         });
       }
       $('#myModal').modal({
         backdrop: false,
         show: true
       });
     
       $('.modal-dialog').draggable({
         handle: ".modal-header"
       });
     });    
   }); 
 //  var firstCalc = new Calculator();