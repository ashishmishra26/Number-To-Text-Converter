import {
    NumberToWord
} from "./numberword.js";
import {
    Replace
} from "./replace.js";
export class Phoneno {
    constructor(array, input) {
        this.no = input;
        this.ref = array;
    }
    convert() {
        let obj = new NumberToWord();
        let out = "";
        out = this.no.charAt(0);
        for (let i = 1; i < this.no.length; i++) {
            let lett = this.no.charAt(i);
            out += (obj.number_to_word(lett));
        }
        out = out.trim();
        out = out.replace(/\s+/g, "");
        let obj2 = new Replace(this.ref);
        obj2.replacer(this.no, out);
    }
    output() {
        let obj = new NumberToWord();
        let out = "";
        out = this.no.charAt(0);
        for (let i = 1; i < this.no.length; i++) {
            let lett = this.no.charAt(i);
            out += (obj.number_to_word(lett));
        }
        out = out.trim();
        out = out.replace(/\s+/g, "");
        return out;
    }

}