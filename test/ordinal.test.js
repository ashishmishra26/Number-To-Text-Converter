import {Ordinal} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/ordinal.js';
import {NumberToWord} from "/home/ashishmishra/Desktop/Number-To-Text-Converter/src/numberword.js";
test('Ordinal', () => {
    let obj=new Ordinal(null,"3rd");
    expect(obj.output()).toBe("threerd");
})
test('Ordinal', () => {
    let obj=new Ordinal(null,"9th");
    expect(obj.convert()).toBe(undefined);
})