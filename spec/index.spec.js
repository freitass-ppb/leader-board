
const { getNumberOfDollsAvailable } = require("../src/index");

describe("getNumberOfDollsAvailable test", () => {
    it("should return `0` if the input is empty", () => {
        expect(getNumberOfDollsAvailable()).toBe(0);
    });

    it("should return `0` if the input is null", () => {
        expect(getNumberOfDollsAvailable(null)).toBe(0);
    });

    it("should return `0` if the input is undefined", () => {
        expect(getNumberOfDollsAvailable(undefined)).toBe(0);
    });


    it("should return `0` if  the input is not a string", () => {
        expect(getNumberOfDollsAvailable(3)).toBe(0);
    });

    describe("when the input is a string", () => {
        it("should return `0` if the string is empty", () => {
            expect(getNumberOfDollsAvailable("")).toBe(0);
        });

        it("should return `0` if the string doesn't contain at least", () => {
            expect(getNumberOfDollsAvailable("")).toBe(0);
        });

        it("should return `0` if the string length is higher than 50", () => {
            expect(getNumberOfDollsAvailable("this_is_a_string_with_more_than_fifty_characters.  You should not pass")).toBe(0);
        });

        it("should return `1` if the string contains one doll", () => {
            expect(getNumberOfDollsAvailable("aaaaallaahbbbbbb")).toBe(1);
        });

        it("should return `2` if the string contains two dolls", () => {
            expect(getNumberOfDollsAvailable("aaaaallllhhbbbbbb")).toBe(2);
        });

        it("should return `5` if the string contains five dolls", () => {
            expect(getNumberOfDollsAvailable("llhllllaaaaahaaaallllaahbbbhbbbh")).toBe(5);
        });
    });
});