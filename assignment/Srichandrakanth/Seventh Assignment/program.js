var taskHtml = `<li class="task">
<p><i class="fas fa-sticky-note"></i>
    Sticky Note 
    <span id = "hey"><i id ="mini" class="fas fa-redo-alt"></i> clear<span id="pp"><i class="fas fa-minus-circle pp"></i></i
      ><i id ="spec" class="fas fa-times-circle"></i></span>
      </span>
  </p>
 <span class="taskNotes"></span>
</li>`;
console.log(taskHtml);
$(document).ready(afterDocumentReady);
function afterDocumentReady() {
  $('#inputText').keyup(function(e) {
    var r = e.which;
    if (r === 13) {
      processDone();
    }
  });
  $('#btnAddTask').click(function() {
    processDone();
  });
  $('ul#data').on('click', 'i#spec', function() {
    $(this)
      .closest('li.task')
      .remove();
  });
  $('ul#data').on('click', 'i#mini', function() {
    $(this)
      .closest('li.task')
      .find('span.taskNotes')
      .remove();
  });
}
function processDone() {
  console.log('hi');
  var userEnteredText = $('#inputText').val();
  var $taskHtml = $(taskHtml);
  $taskHtml.find('.taskNotes').text(userEnteredText);
  $('ul#data').append($taskHtml);
  $('#inputText').val('');
  $('#inputText').focus();
}
