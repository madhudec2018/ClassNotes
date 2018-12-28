
//Class 

var counter = 0;

function Calculator(){
    counter++;
    this.id =  'Calculator_' + counter;
    this.$elem = null;
    this.lhs = '';
    this.operator = '';
    this.render();
}

//Calcualtor.protytype = {}

Calculator.prototype.render = function(){
 var self = this;
 var calcHtml = $('<div>');
 console.log(self.id);

 calcHtml.load('calculator.html',function(){
  var template = calcHtml.html();
  var $elem = $(template).addClass(self.id);
  $elem.find('.heading').text(self.id.replace('_',' '));
  self.$elem = $elem;
  $('.calculatorsContainer').append($elem);
  self.bindEvents();
 });


}

Calculator.prototype.bindEvents = function(){
    var self = this;
    //button , 17 functions are 
    // self.$elem.find('button').click(function(){

    // });

    // 1 -- attach will only one click handler 
    self.$elem.on('click', 'button', function(){
        var data = $(this).data();
        var num =  _.get(data, 'num');
        var operation = _.get(data,'ops');
        if(_.isNumber(num)){
            //if operation is already presen
            var result = self.getResult();
            result += '' + num;
            self.setResult(result);
                //button click is number 
        } else if(operation !== 'equals') {
            var result = self.getResult();
            self.lhs = result;
            self.operator = operation;
            self.setResult('');
            //button click is  operation
        }else if(operation === 'equals'){
            var result = self.getResult();
            var output = self.doOperation(self.lhs, self.operator, result);
            self.lhs = '';
            self.operator = '';
            self.setResult(output);
        }
       // this 
    });

}
Calculator.prototype.doOperation = function(lhs,operator,rhs){
    var self = this;
    switch(operator){
        case 'plus':
        return self.add(lhs,rhs);
        break;
        case 'minus':

        break;
    }
}

Calculator.prototype.add = function(lhs,rhs){
    lhs = _.toNumber(lhs);
    rhs = _.toNumber(rhs);
    return lhs + rhs;
}

Calculator.prototype.getResult = function(){
    var self = this;
    var resultElement = self.$elem.find('.resultViewer');
    return resultElement.text();
}

Calculator.prototype.setResult = function(value){
    var self = this;
    var resultElement = self.$elem.find('.resultViewer');
    resultElement.text(value);
}




