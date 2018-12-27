var data = '<li class="task"> <p> <i class="far fa-sticky-note"></i> Sticky Note <span class="info"><i id = "info" class="fas fa-undo-alt"></i> Clear</span></p><span class="taskNotes"> </span><p class="imp"><submit class="imp"><i class="fas fa-trash-alt"></i> Delete</submit></p></li>';

$(document).ready(onDocumentReady);

function onDocumentReady() {
    $('#btnaddtask').click(function(){
        addnewtask();
    });

    $('.taskinput').keyup(function(event){
        var keyCode = event.which; 
        if(keyCode === 13){
            addnewtask();
        }
    });

    $('ul.notes').on('click','submit.imp',function(){    
        $(this).closest('li.task').remove();
    });

    $('ul.notes').on('click','i#info',function(){
        $(this).closest('li.task').find('span.taskNotes').remove();
});

};

function addnewtask() {
    var tasktextentered = $('.taskinput').val();
    var $data = $(data);
    $data.find('.taskNotes').text(tasktextentered);
    $('.notes').append($data);
    $('.taskinput').val('');
}
