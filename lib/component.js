class Component {
    constructor(children){
        this.children = children
    }
    renderInnerSVG () {
        return this.children.join("")
    }
}

module.exports = Component