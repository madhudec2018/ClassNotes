$(function() {
  $('.btn.btn-primary').click(function() {
    var loadActors = {
      url: 'http://localhost:8100/actors/',
      method: 'get',
      dataType: 'json',
      timeout: 3000,
      success: function(data) {
        getActors(data);
      },
      error: function(xhr, status, error) {},
      complete: function() {}
    };
    $.ajax(loadActors);
  });

  var bootstrapCard =
    '<div  class="float-left my-3 yay" ><div class="card" style="width: 18rem;">' +
    '<img class="card-img-top" src="ActorImage" alt="Card image cap" style="height : 15rem" >' +
    '<div class="card-body">' +
    '<h5 class="card-title">Name</h5>' +
    '<p class="card-text">Industry</p>' +
    '<p>Rating</p>' +
    '<div class="rating">' +
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
    '<label class ="out">getText</label>' +
    '</div>' +
    '</div>' +
    '</div>';
  function getActors(content) {
    $('#act').empty();
    var app = content.map(function(actor) {
      return bootstrapCard
        .replace('ActorImage', actor.imageUrl)
        .replace('Name', actor.firstName)
        .replace('Industry', actor.industry)
        .replace('#id', actor.actorId);
    });
    var apple = app.join('');
    $('#act').append(apple);
  }
  // Code goes here
  $('#act').on('click', '.rating input', function() {
    toastr.error('yey');
    var $radio = $(this);

    $radio
      .closest('.rating')
      .find('.selected')
      .removeClass('selected');
    $radio.closest('label').addClass('selected');
    var title = $radio.attr('title');

    $radio
      .closest('.card')
      .find('.out')
      .text(title);
  });
});
