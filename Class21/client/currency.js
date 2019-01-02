//data structure 
var USD_ExchangeRates = {
    'EUR': null,
    'CAD': null,
    'GBP' : null
};

$(function(){

    //http://free.currencyconverterapi.com/api/v5/convert?q=USD_EUR&compact=y

    
    var exchanges = [ 'EUR', 'CAD', 'GBP'];

    

    var resultExchange = 'USD';
    
    loadExchanges(exchanges,resultExchange,USD_ExchangeRates);

    function loadExchanges(exchanges,format,resultValue){
        var baseUrl = 'http://free.currencyconverterapi.com/api/v5/convert?q=#ToExchange_#FromEchange&compact=y'
        for(var i = 0; i < exchanges.length; i++){
          var currentExchange = exchanges[i];
          var url = baseUrl.replace('#ToExchange',format)
                           .replace('#FromEchange',currentExchange);

                           
          var resultKey = format+'_'+currentExchange;

          //original function
        //    var exchangeCB = function(obj){
        //      //obj.key.val
        //      if(obj && obj[resultKey] && obj[resultKey].val){
        //         resultValue[currentExchange] = obj[resultKey].val;
        //      }

        //    };


        //converted to solve closure issue 
         var exchangeCB = (function(resultKey,currentExchange,url){
                return function(obj){
                    if(obj && obj[resultKey] && obj[resultKey].val){
                        resultValue[currentExchange] = obj[resultKey].val;
                    } 
                }
          })(resultKey,currentExchange,url);

           getExchange(url,exchangeCB);
        }


    }


    function getExchange(url, successCB){
        var requestConfig = {
                url: url,
                method: 'get',
                dataType: 'json',
                timeout: 30000,//10-30 seconds 
                success: function(data){
                   successCB(data);
                },
                error: function(xhr,status,error){
                    console.log('Error  came ');
                },
                complete: function(){
                    console.log('complete  came ');
                }
         };
        $.ajax(requestConfig); 
    }


});