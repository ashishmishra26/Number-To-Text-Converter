import {
    Replace
} from './replace.js';
import {
    NumberToWord
} from './numberword.js';
export class Date {
    constructor(array, input) {
        this.date = input;
        this.ref = array;
    }
    convert() {
        let a = this.date.split(/[-]|[/]/);
        let b = [];
        let obj = new NumberToWord();
        for (let i = 0; i < a.length; i++) {
            b.push(obj.number_to_word(a[i]).trim());
        }
        b = b.join("-");
        let obj2 = new Replace(this.ref);
        obj2.replacer(this.date, b);

    }
    output() {
        let a = this.date.split(/[-]|[/]/);
        let b = [];
        let obj = new NumberToWord();
        for (let i = 0; i < a.length; i++) {
            b.push(obj.number_to_word(a[i]).trim());
        }
        b = b.join("-");
        return b;
    }
}