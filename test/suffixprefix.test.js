import {
    SuffixPrefix
} from "../src/suffixprefix.js";
import {
    NumberToWord
} from "../src/numberword.js";
test("SF", () => {
    let obj = new SuffixPrefix(null, "3s");
    expect(obj.output()).toBe("threes");
});
/*test("SF", () => {
    let obj = new SuffixPrefix(null, "4th");
    expect(obj.check()).toBe(undefined);
});
test("SF", () => {
    let obj = new SuffixPrefix(null, "4s");
    expect(obj.check()).toBe(undefined);
});*/