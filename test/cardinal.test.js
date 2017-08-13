import {Cardinal} from "/home/ashishmishra/Desktop/Number-To-Text-Converter/src/cardinal.js";
import {NumberToWord} from "/home/ashishmishra/Desktop/Number-To-Text-Converter/src/numberword.js";
test("Cardinal", () => {
    let obj=new Cardinal(null,"3");
    expect(obj.output()).toBe("three");
});
test("Cardinal", () => {
    let obj=new Cardinal(null,"9");
    expect(obj.convert()).toBe(undefined);
});