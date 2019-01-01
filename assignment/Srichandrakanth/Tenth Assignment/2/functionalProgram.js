function Calculator() {
  //hello
  count = '';
  this.id = ' ' + count;
  this.$elem = null;
  this.lhs = '';
  this.rhs = '';
  this.operator = '';
  this.output = null;
  this.getCalculator();
}

Calculator.prototype.getCalculator = function() {
  var self = this;
  var getTemplate = $('<div>');
  getTemplate.load('template.html', function() {
    $('.calculatorsContainer').html('');
    var template = getTemplate.html();
    var calTemplate = $(template);
    calTemplate
      .addClass(self.id)
      .find('.heading')
      .text('Calculator' + self.id);
    self.$elem = calTemplate;
    $('.calculatorsContainer').append(calTemplate);

    self.bindEvents();
  });
};
Calculator.prototype.bindEvents = function() {
  var self = this;
  self.$elem.on('click', 'button', function() {
    var data = $(this).data();
    var num = _.get(data, 'num');
    var operation = _.get(data, 'ops');
    if (num === '.') {
      var result = self.getResult();
      result += num;
      self.setResult(result);
    } else if (_.isNumber(num)) {
      var result = self.getResult();
      result += num;
      self.setResult(result);
    } else if (operation !== 'equals') {
      if (self.lhs !== '') {
        self.calResult();
        self.setResult(self.output);
      }
      self.lhs = self.getResult();
      self.operator = operation;
      self.setResult('');
    } else if (operation === 'equals') {
      self.calResult();
      self.lhs = '';
      self.setResult(self.output);
    }
  });
};
Calculator.prototype.getResult = function() {
  var self = this;
  var prevResult = self.$elem.find('.resultViewer').text();
  return prevResult;
};
Calculator.prototype.setResult = function(value) {
  var self = this;
  self.$elem.find('.resultViewer').text(value);
};
Calculator.prototype.operationResult = function(lhs, rhs, operator) {
  var self = this;
  switch (operator) {
    case 'plus':
      return self.add(lhs, rhs);
      break;
    case 'minus':
      return self.sub(lhs, rhs);
      break;
    case 'times':
      return self.mul(lhs, rhs);
      break;
    case 'divided by':
      return self.div(lhs, rhs);
      break;
    //case 'minus':
    // break;
  }
};

Calculator.prototype.add = function(lhs, rhs) {
  lhs = _.toNumber(lhs);
  rhs = _.toNumber(rhs);
  return lhs + rhs;
};
Calculator.prototype.sub = function(a, b) {
  a = _.toNumber(a);
  b = _.toNumber(b);
  return a - b;
};
Calculator.prototype.mul = function(a, b) {
  a = _.toNumber(a);
  b = _.toNumber(b);
  return a * b;
};
Calculator.prototype.div = function(a, b) {
  a = _.toNumber(a);
  b = _.toNumber(b);
  return a / b;
};
Calculator.prototype.calResult = function() {
  var self = this;
  var lhs = self.lhs;
  var rhs = self.getResult();
  var operator = self.operator;
  self.output = self.operationResult(lhs, rhs, operator);
};
