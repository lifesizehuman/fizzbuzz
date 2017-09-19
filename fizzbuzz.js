const inquirer = require("inquirer");

var fizzBuzz = () => {
  inquirer.prompt([{
    type: "number",
    message: "pick a number",
    name: "input"
  }]).then(function(argument) {
    var number = parseInt(argument.input);
    switch (true) {
      case (number % 3 === 0 && number % 5 === 0):
        console.log("Fizzbuzz");
        break;
      case (number % 3 === 0):
        console.log("Fizz");
        break;
      case (number % 5 === 0):
        console.log("Buzz");
        break;
      default:
        console.log(number);
    }
    fizzBuzz();
  });
};

fizzBuzz();
