

function Calculator(){
    counter++;
    this.id =  'Calculator_' + counter;
    this.$elem = null;
    this.lhs = '';
    this.operator = '';
    this.render();
}

Calculator.prototype = {
    render :  render,
    bindEvents: bindEvents
}


/***
 * 
 */

function render(){
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

function bindEvents(){
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