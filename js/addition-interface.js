var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#addition').submit(function(event) {
    event.preventDefault();
    var num1 = $('#number1').val();
    var num2 = $('#number2').val();
    var simpleCalculator = new Calculator("green", num1);
    var output = simpleCalculator.addition(num2);
    $('#solution').append("These numbers add up to: " + output);
  });
});
