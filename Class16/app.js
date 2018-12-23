
$(document).ready(onDocumentReady);

function onDocumentReady(){
    $('#btnAddTask').click(function(){
        addNewTask();
    });

    $('#taskInput').keyup(function(event){
        //event 
        //e.keyCode 
        var keyCode = event.which;
        // enter key 
        if(keyCode === 13){
            addNewTask();
        }
    });

//    $('li.task').click(function(){
//     var taskClicked =  $(this);
//     taskClicked.addClass('done');
//    })


// $('ul#taskContainer').click(function(ev){
//   var taskClicked =  $(ev.target);
//      // hasClass we are checking if done is already applied 
//     if(taskClicked.hasClass('done')){
//         taskClicked.remove();
//         // remove vs detach 
//     }else{
//         taskClicked.addClass('done');
//     }
// });

      $('ul#taskContainer').on('click','li.task', function (){
        var taskClicked =  $(this);
        // hasClass we are checking if done is already applied 
        if(taskClicked.hasClass('done')){
            taskClicked.remove();
            // remove vs detach 
        }else{
            taskClicked.addClass('done');
        }
      });

};

function addNewTask(){
    // getting the value entered from the text input
    var taskTextEntered = $('#taskInput').val();
    //$('li');//read existing li elements from the page
    //$('<li>');//create a new li element 
    //$('<li>').text(taskTextEntered)
    //<li >Learn Regex</li>
    //<li class="task"> This is First Task created manually</li>
    var newTaskElement =  $('<li>').text(taskTextEntered).addClass('task');
    $('#taskContainer').append(newTaskElement);

    // newTaskElement.click(function(){
    // //$('li').click(function(){
    // //     //add a class of done 
    // //     //this -- html element 
    // //     //$(this) -- jquery element 
    //    var taskClicked =  $(this);
    //    taskClicked.addClass('done');
    //    //console.log('li is clicked');
    // })

    // setting the value to the text input
    $('#taskInput').val('');
    // set focus on the element
    $('#taskInput').focus();
}

// from multiple ways i want to run the same code 
// create a function 