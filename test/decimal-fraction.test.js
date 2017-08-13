import {DecimalFraction} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/decimal-fraction.js';
test('DF', () => {
    let obj=new DecimalFraction(null,"3.3");
    expect(obj.output()).toBe("three . three ");
})
test('DF', () => {
    let obj=new DecimalFraction(null,"3/3");
    expect(obj.output()).toBe("three / three ");
})
test('DF', () => {
    let obj=new DecimalFraction(null,"4.5");
    expect(obj.convert()).toBe(undefined);
})
test('DF', () => {
    let obj=new DecimalFraction(null,"4/5");
    expect(obj.convert()).toBe(undefined);
})