const {mean, median, mode} = require("./mathFuncs");

describe("test for mean", () => {
    it("finds mean of dataset", () => {
        expect(mean([23,7,3])).toEqual(11);
        expect(mean([69,74,-56])).toEqual(29);
    })
    it("finds mean of empty set", () => {
        expect(mean([]).toEqual(0))
    })
})

describe("test for median", () => {
    it("finds median of dataset", () => {
        expect(median([5,6,7,8])).toEqual()
        expect(median([5,6,7])).toEqual(6.5)
    })
})

describe("test for mode", () => {
    it("finds mode of dataset", () => {
        expect(mode([5,6,6,7,7,7,9]).toEqual(7))
    })
})