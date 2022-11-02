import fs from 'fs'
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js'


const questions =[
    {
        type: "input",
        name: "title",
        message: "Enter project title: ",
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter your project title.");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "description",
        message: "Enter project description: ",
        validate: description => {
          if (description) {
            return true;
          } else {
            console.log("Enter description: ");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions: ",
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Which license is used for this project:',
        choices: ['Mozilla', 'Boost', 'MIT', 'GNU', 'ISC', 'Apache'],
        validate: choicesLength => {
          if (choicesLength.length <= 1) {
            return true;
          } else {
            return "License cannot be blank.";
          }
        }
      },
      {
        type: "input",
        name: "usage",
        message: "Enter usage info:",
      },
      {
        type: "input",
        name: "contributing",
        message: "Enter contributer info:",
      },
      {
        type: "input",
        name: "tests",
        message: "Enter test info: ",
      },
      {
        type: "input",
        name: "githubUsername",
        message: "Enter github username: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter email: ",
      }
];


function writeToFile(fileName, data) {
    fs.writeFile("./dist/README.md", generateMarkdown(data), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('Success!');
      });
}


function init() { 
    inquirer.prompt(questions)
    .then(function(answer) {
      const fileName =
        answer.title
          .split(' ')
          .join('') + '.md';
      
      writeToFile(fileName, answer);
    });
}


init();

