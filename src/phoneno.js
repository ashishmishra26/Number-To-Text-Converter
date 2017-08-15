/** This is Phoneno Module
 * @module
 */
import {
    NumberToWord
} from "./numberword.js";
import {
    Replace
} from "./replace.js";
/**Phoneno class
 * @class
 */
export class Phoneno {
    /**constructor of Phone class
     * @constructor
     * @param {object|string}
     */
    constructor(array, input) {
        this.no = input;
        this.ref = array;
    }
    /**convert function
     * @function
     */
    convert() {
        let obj = new NumberToWord();
        let out = "";
        if (this.no.charAt(0) === "0") {
            out = "zero ";
        }else{
            out=this.no.charAt(0);
        }
        for (let i = 1; i < this.no.length; i++) {
            let lett = this.no.charAt(i);
            out += (obj.number_to_word(lett));
        }
        out = out.trim();
        let obj2 = new Replace(this.ref);
        obj2.replacer(this.no, out);
    }
    /**output function to return value
     * @function
     * @return {string}
     */
    output() {
        let obj = new NumberToWord();
        let out = "";
        out = this.no.charAt(0);
        for (let i = 1; i < this.no.length; i++) {
            let lett = this.no.charAt(i);
            out += (obj.number_to_word(lett));
        }
        out = out.trim();
        out = out.replace(/\s+/g, " ");
        return out;
    }

}