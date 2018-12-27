console.log(isNumber(5));
console.log(isNumber(Infinity));
console.log(isNumber(true));
console.log(isNumber('5'));
var app = {
  myName: 'apple',
  myNumber: '5'
};
console.log(isNumber(app));
var mango = function() {};
console.log(isNumber(mango()));
function isNumber(a) {
  if (a === Infinity) {
    return true;
  } else if (Number.isFinite(a)) {
    return true;
  }
  return false;
}
console.log('**********************');
