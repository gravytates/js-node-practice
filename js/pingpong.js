
function Calculator(skinName, number1) {
  this.skin = skinName;
  this.number1 = number1;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.addition = function(number2) {
  output = this.number1 + number2;
  return output;
};

exports.calculatorModule = Calculator;
