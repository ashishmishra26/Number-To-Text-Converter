import {DecimalFraction} from "../src/decimal-fraction.js";
import {NumberToWord} from "../src/numberword.js";
test("DF", () => {
    let obj=new DecimalFraction(null,"3.3");
    expect(obj.output()).toBe("three . three ");
});
test("DF", () => {
    let obj=new DecimalFraction(null,"3/3");
    expect(obj.output()).toBe("three / three ");
});
test("DF", () => {
    let obj=new DecimalFraction(null,"4.5");
    expect(obj.convert()).toBe(undefined);
});
test("DF", () => {
    let obj=new DecimalFraction(null,"4/5");
    expect(obj.convert()).toBe(undefined);
});