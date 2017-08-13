import {Ordinal} from '../src/ordinal.js';
import {NumberToWord} from "../src/numberword.js";
test('Ordinal', () => {
    let obj=new Ordinal(null,"3rd");
    expect(obj.output()).toBe("threerd");
})
test('Ordinal', () => {
    let obj=new Ordinal(null,"9th");
    expect(obj.convert()).toBe(undefined);
})