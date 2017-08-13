import {
    Replace
} from '../src/replace.js';
import {
    Identifier
} from '../src/identifier.js';
import {
    NumberToWord
} from "../src/numberword.js";
test('Dog.bark', () => {
    let obj = new Replace(null);
    expect(obj.replacer()).toBe(undefined);
})