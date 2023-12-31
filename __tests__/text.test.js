const Text = require("../lib/text.js");

describe("Text Class", () => {
    describe("render", () => {
        // should return a string of text
        it("should return a string of text", () => {
            const text = new Text ();
            const result = text.render();
            expect(typeof result).toBe('string')
        })
    })
})

describe("Text Class", () => {
    describe("evalLength", () => {
        // should be no more than three characters
        // should be no less than one character
        it("should be no more than three characters and no less than one character", () => {
            const text = new Text
            const result = text.render();
            const value = result.length;
            expect(value).toBeLessThan(4)
            expect(value).toBeGreaterThan(0)
        })
    })
})