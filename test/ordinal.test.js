import {Ordinal} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/ordinal.js';
test('Ordinal', () => {
    let obj=new Ordinal(null,"3rd");
    expect(obj.output()).toBe("threerd");
})
test('Ordinal', () => {
    let obj=new Ordinal(null,"9th");
    expect(obj.convert()).toBe(undefined);
})