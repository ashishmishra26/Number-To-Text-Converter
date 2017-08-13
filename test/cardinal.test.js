import {Cardinal} from "/home/ashishmishra/Desktop/Number-To-Text-Converter/src/cardinal.js";
test("Cardinal", () => {
    let obj=new Cardinal(null,"3");
    expect(obj.output()).toBe("three");
});
test("Cardinal", () => {
    let obj=new Cardinal(null,"9");
    expect(obj.convert()).toBe(undefined);
});