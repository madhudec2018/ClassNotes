$(function() {
  $('input.form-control.from').keyup(function(event) {
    var key = event.which;
    if (key === 13) {
      conversion1();
    }
  });
  $('input.form-control.to').keyup(function(event) {
    var key = event.which;
    if (key === 13) {
      conversion2();
    }
  });
});
function conversion1() {
  var text = $('input.from').val();
  var $from = _.toNumber(text);
  var $to = 0;

  var dollarName = $('select.to').val();
  switch (dollarName) {
    case 'EUR':
      $to = $from * 0.8148;
      break;
    case 'GBP':
      $to = $from * 0.7357;
      break;
    case 'CAD':
      $to = $from * 1.2357;
      break;
    case 'MXN':
      $to = $from * 18.0081;
      break;
    case 'JYP':
      $to = $from * 100.7825;
      break;
    default:
      $to = 0;
  }
  $('input.from').val('');
  $('input.to').val($to);
}

function conversion2() {
  var text = $('input.to').val();
  var $to = _.toNumber(text);
  var $from = 0;

  var dollarName = $('select.to').val();
  switch (dollarName) {
    case 'EUR':
      $from = $to / 0.8148;
      break;
    case 'GBP':
      $from = $to / 0.7357;
      break;
    case 'CAD':
      $from = $to / 1.2357;
      break;
    case 'MXN':
      $from = $to / 18.0081;
      break;
    case 'JYP':
      $from = $to / 100.7825;
      break;
    default:
      $from = 0;
  }
  $('input.to').val('');
  $('input.from').val($from);
}
