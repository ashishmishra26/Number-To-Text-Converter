import {Money} from "../src/money.js";
import {NumberToWord} from "../src/numberword.js";
test("Money", () => {
    let obj=new Money(null,"9,000");
    expect(obj.output()).toBe("nine thousand ");
});
/*test("Money", () => {
    let obj=new Money(null,"8,000,000");
    expect(obj.convert()).toBe(undefined);
});*/