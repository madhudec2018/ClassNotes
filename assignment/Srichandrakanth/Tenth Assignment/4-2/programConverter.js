$(function() {
  //loadConversion();
  $('input.form-control.from').keyup(function(event) {
    var key = event.which;
    if (key === 13) {
      var fromdollarName = $('select.from').val();
      var todollarName = $('select.to').val();
      converter(fromdollarName, todollarName);
    }
  });
});
function converter(fromdollarName, todollarName) {
  fromdollarName;
  todollarName;
  var urlLoad =
    'http://free.currencyconverterapi.com/api/v5/convert?q=USD_CAD&compact=y';
  var urlFinal = urlLoad
    .replace('CAD', todollarName)
    .replace('USD', fromdollarName);

  var loadExchangeRate = {
    url: urlFinal,
    method: 'get',
    dataType: 'json',
    timeout: 3000,
    success: function(data) {
      loadValue(data);
    },
    error: function(xhr, status, error) {
      alert('error');
    },
    complete: function() {}
  };
  $.ajax(loadExchangeRate);
}
function loadValue(value) {
  var dollarName = $('select.to').val();
  var text = $('input.from').val();
  var $from = _.toNumber(text);
  var $to = 0;
  var outKey = _.findLastKey(value);
  $to = $from * value[outKey].val;
  $('input.from').val('');
  $('input.to').val($to);
}
// function loadConversion() {
//   var arr = ['EUR', 'GBP', 'CAD', 'MXN', 'JPY', 'INR'];
//   var urlLoad =
//     'http://free.currencyconverterapi.com/api/v5/convert?q=USD_CAD&compact=y';
//   for (var i = 0; i < arr.length; i++) {
//     var arrValue = arr[i];
//     var urlLoaded = urlLoad.replace('CAD', arr[i]);
//     var a = 0;
//     var loadExchangeRate = {
//       url: urlLoaded,
//       method: 'get',
//       dataType: 'json',
//       timeout: 3000,
//       success: function(data) {
//         loadForList(data);
//       },
//       error: function(xhr, status, error) {
//         alert('error');
//       },
//       complete: function() {}
//     };
//     $.ajax(loadExchangeRate);
//   }
//   function loadForList(valu) {
//     var outKey = _.findLastKey(valu);
//     var $to = valu[outKey].val;

//     var str =
//       '<p class="card-text"><span class="text-left">EUR</span><span class="text-right"> - 0.8148</span></p>' +
//       '<hr>';
//     var str2 = str.replace('EUR', arr[i]).replace('0.8148', $to);
//     $('h5.list').append(str2);
//   }
// }
