# SVG Logo Generator

## Description
This project generates an SVG file from command line prompts. The repository can be found at https://github.com/Flying-S-Ranch/logo-maker. This project gave me the opportunity to practice writing tests as a way to develop working code. This was also my first time to learn about SVG files. I enjoyed learning about how the parts of an SVG file fit together.
So far I have not been able to get the code to function properly. The command line asks a series of questions and generates an SVG file, but it does not incorporate testing and the SVG file does not load into a visible image (the 'shape' portion returns as undefined). I will continue to work on this project so that the functionality improves.

## Usage
Open the command line terminal for the file, then type node index. Answer the questions in the prompt. After the last question has been answered, the console will confirm that an SVG file has been created. You can find the SVG file in the examples folder with your selections included.

## Credits
The file structure of this project is adapted from the example in the assignment README

The base of the svg file code was adapted from the demo found on MDN web docs here: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started

The files component.js and component.test.js are adapted from the module 10 mini-project

In lines 33-37 and 47-51, I looked back to what I had done in my Challenge 09 project (see lines 53-58 and 65-69). This was an attempt to select the shape code and insert it into the template file, but does not work as intended.