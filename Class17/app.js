//document.ready 
$(function (){

    //user interacted some thing
   //Event Propagation Phase

   $('.btn').click(function(ev){

     //ev.stopPropagation();
    //ev.preventDefault();
    console.log('Click Handler of the Button');
    return false;
   });

   $('.green').click(function(){

    console.log('Click Handler of the Green div ');

   });

   $('.red').click(function(event){

    var target = event.target;//where exactly the event occurred;
    console.log('Click Handler of the Red div ');

   });

   $('.blue').click(function(){

    console.log('Click Handler of the Blue div ');

   });

  //submitBtn.addEventListener('click',handleClick,true);

// Event Propagation Phase
//three phases 
// 1) Capturing phase (Microsoft)
// 2) Target phase
// 3) Bubbling phase (Netscape)

//Event bubbling 
   //event.stopPropagation


   $('a').click(function(e){
       //stop the default behavior
    // e.preventDefault();
    return false;
   });
   //event.preventDefault
});