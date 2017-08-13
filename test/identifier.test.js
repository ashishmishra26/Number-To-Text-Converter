import {
    NumberToWord
} from "/home/ashishmishra/Desktop/Number-To-Text-Converter/src/numberword.js";
import {
    Identifier
} from "/home/ashishmishra/Desktop/Number-To-Text-Converter/src/identifier.js";

test("Identifier", () => {
    let obj = new NumberToWord();
    expect((obj.number_to_word(1)).trim()).toBe("one");

});

test("identifier", () => {
    let obj = new NumberToWord();
    expect((obj.number_to_word(0)).trim()).toBe("");

});

test("identfier", () => {
    let obj = new Identifier("hi 100");
    expect(obj.identify()).toBe(undefined);

});