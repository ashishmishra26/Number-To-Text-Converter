import {
    Replace
} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/replace.js';
import {
    Identifier
} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/identifier.js';
import {
    NumberToWord
} from "/home/ashishmishra/Desktop/Number-To-Text-Converter/src/numberword.js";
test('Dog.bark', () => {
    let obj = new Replace(null);
    expect(obj.replacer()).toBe(undefined);
})