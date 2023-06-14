// DEPENDENCIES
const inquirer = require('inquirer')
const fs = require('fs')
const Text = require('./lib/text.js')

// DATA STATE
let template;
let userShape
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

const shapeSVG = [
  `<circle cx="150" cy="100" r="80"`,
  `<rect x="35" y="10" width="80" height="80"`,
  `<polygon points = "75, 10 45, 90 105, 90"`
]

// FUNCTIONS
const drawSVG = ({text, textColor, shapeColor, shape}) => {
  // Text()
// if(text.length < 4 && text.length > 0) {
//   let userText = {text}
// } else {
//   console.log("Please run node index again, and enter 1-3 characters of text")
// }
function chooseShape() {
  const shapeIndex = questions[0].choices.indexOf(shape)
  userShape = shapeSVG[shapeIndex]
}
chooseShape

template = 
// This template is adapted from an example in MDN web docs, please see the README for the link
`<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg"/>
  <rect width="100%" height="100%" fill="white"/>
  ${userShape} fill="${shapeColor}"/>
  <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`

fs.writeFile('./examples/logo.svg', template, (err) => {
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
