import {Ordinal} from "../src/ordinal.js";
test("Ordinal", () => {
    let obj=new Ordinal(null,"3rd");
    expect(obj.output()).toBe("third");
});
test("Ordinal", () => {
    let obj=new Ordinal(null,"1st");
    expect(obj.output()).toBe("first");
});
test("Ordinal", () => {
    let obj=new Ordinal(null,"5th");
    expect(obj.output()).toBe("fifth");
});