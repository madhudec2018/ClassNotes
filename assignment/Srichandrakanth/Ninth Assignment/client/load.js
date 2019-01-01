$(function() {
  var templateHolder = $('<div>');
  var bootstrapCard;
  templateHolder.load('Actor.html', function() {
    bootstrapCard = templateHolder.html();
    bindEvents();
  });

  function bindEvents() {
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
        .closest('.card-body')
        .find('.out')
        .text(title);
    });
  }
});
