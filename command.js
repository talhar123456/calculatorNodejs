let cal = () => {
  var inquirer = require("inquirer");

  inquirer
    .prompt([
      {
        type: "list",
        name: "operation",
        message: "What operation do you want to perform",
        choices: ["Addition", "Substraction", "Multiplication", "Division"]
      },
      {
        type: "input",
        name: "first_number",
        message: "Enter first number"
      },
      { type: "input", name: "second_number", message: "Enter second number" }
    ])
    .then(answers => {
      var a = JSON.stringify(answers);
      // console.log(a);
      var b = JSON.parse(a);
      // console.log(b);
      var c = b.operation;
      var first = parseInt(b.first_number);
      var second = parseInt(b.second_number);
      if (c == "Addition") {
        console.log(first + second);
      }
      if (c == "Substraction") {
        console.log(first - second);
      }
      if (c == "Multiplication") {
        console.log(first * second);
      }
      if (c == "Division") {
        console.log(first / second);
      }
    });
};
module.exports.cal = cal;
