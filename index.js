// DEPENDENCIES
const inquirer = require('inquirer')

// DATA STATE
const questions = [
    {
      type: 'list',
      message: 'What shape would you like for your logo?',
      name: 'shape',
      choices: ['circle', 'square', 'triangle']
    },
    {
      type: 'input',
      message: 'What color would you like the shape to be?',
      name: 'shape-color'
    },
    {
      type: 'input',
      message: 'What is your logo text (up to three characters)?',
      name: 'text'
    },
    {
      type: 'input',
      message: 'What color would you like the logo text to be?',
      name: 'text-color'
    },
]

// FUNCTIONS
function drawSVG(answers){
    console.log(answers)
}

// USER INTERACTIONS
inquirer
  .prompt(questions)
  .then((drawSVG))

// INITIALIZATIONS