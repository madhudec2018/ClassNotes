
$(function() {
  $('.btn.btn-primary').click(function() {
    var loadData = {
      url: 'http://localhost:8100/actors/',
      method: 'get',
      dataType: 'json',
      timeout: 3000,
      success: function(data) {
      getActors(data);
      toastr.success('Got Data');
      }, error: function(xhr, status, error) {
        toastr.success('Error Occurred');
      }, complete: function() {
        toastr.info('Completed');
      }
      };
    $.ajax(loadData);
  });

  var bootstrapCard =
    '<div class="float-left m-4"><div class="card" style="width: 20rem;">' +
    '<img class="card-img-top" src="ActorImage" alt="Card image cap" style="height : 15rem" >' +
    '<div class="card-body">' +
    '<h5 class="pl-1 card-title">Name</h5>' +
    '<p class="pl-1 card-text" style="font-weight:700; color:#42AEC9;"><span>Age: </span>ActorAge</p>' +
    '<p><div class="rating">' +
    '<label>' +
    '<input type="radio" name="rating#id" value="5" title="5 stars"> 5' +
    '</label>' +
    '<label>' +
    '<input type="radio" name="rating#id" value="4" title="4 stars"> 4' +
    '</label>' +
    '<label>' +
    '<input type="radio" name="rating#id" value="3" title="3 stars"> 3' +
    '</label>' +
    '<label>' +
    '<input type="radio" name="rating#id" value="2" title="2 stars"> 2' +
    '</label>' +
    '<label>' +
    '<input type="radio" name="rating#id" value="1" title="1 star"> 1' +
    '</label>' +
    '</div>' +
    '<label class ="out">Rating</label></p>' +
    '</div>' +
    '</div>' +
    '</div>';

  function getActors(content) {
    $('#hero').empty();
    var info = content.map(function(actor) {
      return bootstrapCard
        .replace('ActorImage', actor.imageUrl)
        .replace('Name', actor.firstName)
        .replace('ActorAge', actor.age)
        .replace('#id', actor.actorId);
    });
    var data = info.join('');
    $('#hero').append(data);
  }

  $('#hero').on('click', '.rating input', function() {
    var $radio = $(this);
    $radio.closest('.rating').find('.selected').removeClass('selected');
    $radio.closest('label').addClass('selected');
    var title = $radio.attr('title');

    $radio.closest('.card').find('.out').text(title);
  });
});
