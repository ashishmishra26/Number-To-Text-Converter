import {Cardinal} from "../src/cardinal.js";
import {NumberToWord} from "../src/numberword.js";
test("Cardinal", () => {
    let obj=new Cardinal(null,"3");
    expect(obj.output()).toBe("three");
});
test("Cardinal", () => {
    let obj=new Cardinal(null,"9");
    expect(obj.convert()).toBe(undefined);
});