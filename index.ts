#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([{
    message : (chalk.bold.red.italic("Enter your First Number")),
    type:"number",
    name: "numone",
}, {
    message: (chalk.bold.red.italic("Enter your Second Number")),
    type: "number",
    name: "numtwo",
    },{
     message: (chalk.bold.green.underline("Select option to perform your desired operaton =")),
     type: "list",
     name: "operator",
     choices: ["Addition", "Substraction", "Division", "Multiplication"],

    },
]);
    // console.log(answer);


if (answer.operator === "Addition") {

console.log(chalk.bold.yellowBright.underline("your answer is =",(answer.numone + answer.numtwo)));

} else if (answer.operator === "Substraction") {
    console.log("your answer is =",(answer.numone - answer.numtwo));

} else if (answer.operator === "Division") {
    console.log("your answer is =",(answer.numone / answer.numtwo));

} else if (answer.operator === "Multiplication") {
    console.log("your answer is =",(answer.numone * answer.numtwo));
} else {
    console.log("Please Enter a Valid Number");
}

