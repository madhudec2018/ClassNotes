
$('#btnAddTask').click(function(){
//
var taskTextEntered = $('#taskInput').val();
//$('li');//read existing li elements from the page
//$('<li>');//create a new li element 
//$('<li>').text(taskTextEntered)
//<li >Learn Regex</li>
//<li class="task"> This is First Task created manually</li>
var newTaskElement =  $('<li>').text(taskTextEntered).addClass('task');
$('#taskContainer').append(newTaskElement);

});