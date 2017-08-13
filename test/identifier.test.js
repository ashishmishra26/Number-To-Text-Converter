import {
    NumberToWord
} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/numberword.js';
import {
   Identifier
} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/identifier.js';
import {
   Time
} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/time.js';
test('Dog.bark', () => {
    let obj=new NumberToWord();
    expect((obj.number_to_word(1)).trim()).toBe("one");

})

test('Dog.bark', () => {
    let obj=new NumberToWord();
    expect((obj.number_to_word(0)).trim()).toBe("");

})

test('Dog.bark', () => {
    let obj=new Identifier("hi 100");
    expect(obj.identify()).toBe(undefined);

})

