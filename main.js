// var inquirer = require("inquirer");
var figlet = require("figlet");
var chalk = require("chalk");
// var clear = require("clear");

var module = require("./command");

console.log(
  chalk.green(
    figlet.textSync("** Simple Calculator **", {
      font: "",
      horizontalLayout: "default",
      verticalLayout: "default"
    })
  )
);

console.log(module.cal());
