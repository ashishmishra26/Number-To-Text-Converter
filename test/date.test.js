import {Date} from "/home/ashishmishra/Desktop/Number-To-Text-Converter/src/date.js";
test("Date", () => {
    let obj=new Date(null,"9-9-2009");
    expect(obj.output()).toBe("nine-nine-two  thousand nine");
});
test("Date", () => {
    let obj=new Date(null,"8-9-1007");
    expect(obj.convert()).toBe(undefined);
});