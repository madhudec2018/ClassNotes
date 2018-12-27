var stocks = [
    {symbol: 'MSFT', value: '300'},
    {symbol: 'GOOGLE', value: '600'},
    {symbol: 'GOOGLE', value: '300'},
    {symbol: 'APPLE', value: '700'}
];


function getSymbolName(StockName) {
    var p = StockName;
    var b = this.stocks;

    if (p === b[0].symbol) {
            return b[0].value;
    } else if (p === b[1].symbol) {
        return b[1].value; 
    } else if (p === b[2].symbol) {
        return b[2].value;
    } else {
        return b[3].value;
    }
}

console.log(getSymbolName('MSFT'));

console.log('***************************');

function deleteNthIndex(Index){
    var p = Index;
    var arr = [10,5,3,40,50];
    
    if(p === p) {
        arr.splice(p, 1);
        return arr;
    }
}

console.log(deleteNthIndex(3));

console.log('****************************');

function TempFarentoCel(a, b) {
    var q = a;
    var p = b;
    var unit = 'F';
    var temp = 'c';
    if (p === 'c') {
        output = ((180*q)+3200)/100;
        console.log(output + '°' + unit);      
    } 
     else if (p === 'F') {
        output = ((100*q)-3200)/180;
        console.log(output + '°' + temp);
    }
}
TempFarentoCel(60, 'c');

console.log('*********************************');

function camelCase(n) {
    
    var total= n[0].toLowerCase();
  for(var i = 1; i < n.length; i++){
    var a = n[i].toLowerCase();
    var q = a.substring(1);
    var p = a.charAt(0).toUpperCase();
    var b = p + q;
    total+=b;
    }
    console.log(total);
}

camelCase(['test', 'javascript', 'code']);

console.log('********************************');

function calculateChange(items,cash) {
    var p = items;
    var q = cash;
    var total = 0;
    var output = 0;
        var i = 0;
    for (i===0; i<p.length; i++) {
            total+=p[i];
    }
        output = (q-total);
    console.log(output);
}
calculateChange([1,6.5,5],20);

console.log('*********************************');