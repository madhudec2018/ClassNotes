
var count=0;

function Calculator(){
    count++;
    this.id = 'Calculator_'+count;
    this.$elem = null;
    this.lhs='';
    this.operator='';
    this.render();
}

Calculator.prototype.render = function(){
    var self = this;
    var calcHtml = $('<div>');

    calcHtml.load('calculator.html',function(){
    var template = calcHtml.html();
    var $elem = $(template).addClass(self.id);
    $elem.find('.heading').text(self.id.replace('_',' '));
    self.$elem = $elem;
    $('.calculatorsContainer').append($elem);   
    self.bindEvents();
    });
}

Calculator.prototype.bindEvents = function() {
    var self = this;
    self.$elem.on('click', 'button', function(){
        var data = $(this).data();
        var num = _.get(data, 'num');
        var operation = _.get(data, 'ops');
        if(_.isNumber(num)) {
            var result = self.getResult();
            result+=''+num;
            self.setResult(result);
        } else if(num) {
            var result = self.getResult();
            result+=''+num;
            self.setResult(result);
        } else if(operation !== 'equals') {
            var result = self.getResult();
            self.lhs=result;
            self.operator=operation;
            self.setResult('');
        } else if(operation === 'equals'){
            var result = self.getResult();
            var output = self.doOperation(self.lhs,self.operator,result);
            self.lhs = '';
            self.operator = '';
            self.setResult(output);
        }
    });
}

Calculator.prototype.doOperation = function(lhs,operator,rhs){
    var self=this;
    switch(operator) {
        case 'plus':
        return self.add(lhs,rhs);
        break;
        case 'minus':
        return self.sub(lhs,rhs);
        break;
        case 'times':
        return self.mul(lhs,rhs);
        break;
        case 'divided by':
        return self.div(lhs,rhs);
        break;
    }
}

Calculator.prototype.add = function(lhs,rhs) {
    lhs=_.toNumber(lhs);
    rhs=_.toNumber(rhs);
    return lhs+rhs;
}
Calculator.prototype.sub = function(lhs,rhs) {
    lhs=_.toNumber(lhs);
    rhs=_.toNumber(rhs);
    return lhs-rhs;
}
Calculator.prototype.mul = function(lhs,rhs) {
    lhs=_.toNumber(lhs);
    rhs=_.toNumber(rhs);
    return lhs*rhs;
}
Calculator.prototype.div = function(lhs,rhs) {
    lhs=_.toNumber(lhs);
    rhs=_.toNumber(rhs);
    return lhs/rhs; 
}

Calculator.prototype.getResult = function() {
    var self=this;
    var resultelm = self.$elem.find('.resultViewer');
    return resultelm.text();
}

Calculator.prototype.setResult = function(value) {
    var self=this;
    var resultelm = self.$elem.find('.resultViewer');
    resultelm.text(value);
}