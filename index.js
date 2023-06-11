// DEPENDENCIES
const inquirer = require('inquirer')
const fs = require('fs')

// DATA STATE
let template;
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
      name: 'shapeColor'
    },
    {
      type: 'input',
      message: 'What is your logo text (up to three characters)?',
      name: 'text'
    },
    {
      type: 'input',
      message: 'What color would you like the logo text to be?',
      name: 'textColor'
    },
]

// FUNCTIONS
const drawSVG = ({shapeColor, text, textColor}) => {
// if (shape === 'circle') {
//         let userShape = '<circle cx="150" cy="100" r="80"/>'
//     } else if (shape === 'square') {
//         let userShape = '<rect x="35" y="10" width="80" height="80"/>'
//     } else if (shape === 'triangle') {
//         let userShape = '<polygon points = "75, 10 45, 90 105, 90"/>'
//     }
template = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg"/>
<rect width="100%" height="100%" fill="white"/>
<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>
<text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`

fs.writeFile('logo.svg', template, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg')
}
)


}

// USER INTERACTIONS
inquirer
  .prompt(questions)
  .then((drawSVG))

// INITIALIZATIONS