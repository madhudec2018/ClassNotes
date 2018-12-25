$(document).ready(function() {
  var b = $('#buttonClick').offset();
  var images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  var baseUrl = 'images/';
  var i = 0;
  var f;

  //var image = '<img src=' + baseUrl + images[0] + '/>';
  //$('#sp').html(image);
  $('#slideImage').click(function() {
    f = setInterval(function() {
      slideShow();
    }, 3000);
  });
  $('#stopImage').click(function() {
    clearInterval(f);
  });

  function slideShow() {
    i++;
    if (i > images.length - 1) {
      i = 0;
    }

    $('#sp').attr('src', baseUrl + images[i]);
  }
  $('#buttonClick').click(function() {
    a = $(this).offset();

    $(this).offset({ top: a.top + 10, left: a.left });
  });
  $('#buttonSet').click(function() {
    $('#buttonClick').offset({ top: b.top, left: b.left });
  });
  $('#nextImage').click(function() {
    slideShow();
  });
  $('#previousImage').click(function() {
    i--;
    if (i < 0) {
      i = images.length - 1;
    }
    $('#sp').attr('src', baseUrl + images[i]);
  });
});
