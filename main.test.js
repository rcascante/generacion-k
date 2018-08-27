//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
//The string can contain any char.

// XO("ox") => true
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true  when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const { exesAndOhs } = require("./main.js")


describe("contains x's and o's", () => {
    it("contains 1 x and 1 o", () => {
        let result = exesAndOhs("xo");
        expect(result).toBe(true);
    });
    it("contains 2 x's and 2 0's", () => {
        let result = exesAndOhs("xxoo");
        expect(result).toBe(true);
    });
    it("contains 1 x and 2 o's", () => {
        let result = exesAndOhs("xoo");
        expect(result).toBe(false);
    });

    it("contains 2 x's and 3 o's", () => {
        let result = exesAndOhs("xxooo");
        expect(result).toBe(false);
    });

    it("contains 1 uppercase x and 1 lowercase o", () => {
        let result = exesAndOhs("Xo");
        expect(result).toBe(true);
    });

    it("contains same amount of x's and o'x and one m", () => {
        let result = exesAndOhs("ooxXm");
        expect(result).toBe(true);
    });

    it("does not contain x's and o's", () => {
        let result = exesAndOhs("zpzpzpp");
        expect(result).toBe(false);
    });

    it("does not contain x's", () => {
        let result = exesAndOhs("zzoo");
        expect(result).toBe(false);
    });

});

