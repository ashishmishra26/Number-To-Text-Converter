/** Time Module
 * @module
 */
import {
    Replace
} from "./replace.js";
import * as num from "./numberword.js";
/**This is Time class
 * @class
 */
export class Time {
    /**constructor of Time class
     * @constructor
     * @param {object|string} 
     */
    constructor(array, input) {
        this.time = input;
        this.ref = array;
        this.change = "false";
    }
    /** convert function
     * @function
     */
    convert() {
        let a = [];
        a = this.time.split(":");
        let obj = new num.NumberToWord();
        let h1 = obj.number_to_word(a[0]);
        let h2 = obj.number_to_word(a[1]);
        let word = h1 + " " + h2;
        this.change = true;
        let obj2 = new Replace(this.ref);
        obj2.replacer(this.time, word);
    }
    /** output function
     * @function
     * @return {string} -converted value of time in string format.
     */
    output() {
        let a = [];
        a = this.time.split(":");
        let obj = new num.NumberToWord();
        let h1 = obj.number_to_word(a[0]);
        h1 = h1.trim();
        let h2 = obj.number_to_word(a[1]);
        h2 = h2.trim();
        let word = h1 + " " + h2;
        return word;
    }
}