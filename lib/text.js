const Component = require("./component.js")

class Text extends Component {
    render() {
        return 'DFW'
    }
    evalLength() {
        if(this.render().length > 3) {
            throw new Error("Enter up to three characters")
        }
    }
}

module.exports = Text;