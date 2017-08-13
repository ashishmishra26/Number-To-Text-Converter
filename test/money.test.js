import {Money} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/money.js';
import {NumberToWord} from "/home/ashishmishra/Desktop/Number-To-Text-Converter/src/numberword.js";
test('Money', () => {
    let obj=new Money(null,"9,000");
    expect(obj.output()).toBe("nine  thousand ");
})
test('Money', () => {
    let obj=new Money(null,"8,000,000");
    expect(obj.convert()).toBe(undefined);
})