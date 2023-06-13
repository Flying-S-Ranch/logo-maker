const Component = require("../lib/component.js");

describe("Component Class", () => {
    describe("initialization", () => {
        // should make a component object
        it("should make a component onject", () => {
            const component = new Component();

            expect(component instanceof Component).toBe(true)
        })
    })
})