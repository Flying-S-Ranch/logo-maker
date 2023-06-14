const Index = require("../index.js")

class Text {
    constructor(characters) {
        this.characters = characters
    }
    render() {
        return this.characters
    }
    evalLength() {
        if(this.render().length > 3) {
            throw new Error("Enter up to three characters")
        } else if (this.render().length < 1) {
            throw new Error("Please enter at least one character")
        }
    }
}

const text = new Text ("BHX")
console.log(Text)

module.exports = Text;