import {Date} from "../src/date.js";
import {NumberToWord} from "../src/numberword.js";
test("Date", () => {
    let obj=new Date(null,"9-9-2009");
    expect(obj.output()).toBe("nine-nine-two thousand nine");
});
/*test("Date", () => {
    let obj=new Date(null,"8-9-1007");
    expect(obj.convert()).toBe(undefined);
});*/