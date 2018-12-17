console.log('******************');
/* First Program */
var stocks = [
  { symbol: 'MSFT', value: '300' },
  { symbol: 'GOOGLE', value: '600' },
  { symbol: 'GOOGLE', value: '300' },
  { symbol: 'APPLE', value: '700' }
];

function getSymbolName(stockName) {
  for (i = 0; i < stocks.length; i++) {
    if (stocks[i].symbol === stockName) {
      console.log(stocks[i].value);
      break;
    }
  }
}

getSymbolName('MSFT');
getSymbolName('APPLE');
getSymbolName('GOOGLE');
console.log('******************');
/* Second Program */
var arr = [10, 5, 3, 40, 50];
deleteNthIndex(2);
function deleteNthIndex(n) {
  arr.splice(n, 1);
  console.log(arr);
}
