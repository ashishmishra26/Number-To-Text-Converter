/**This is Cardinal Module */
import * as num from "./numberword.js";
import * as rep from "./replace.js";
/** Cardinal class
 * @class
 * Used to convert simple cardinal numbers into words.
 */
export class Cardinal {
    /**constructor of cardinal
     * @constructor
     * @param {object|string} reference and input.
     */
    constructor(array, input) {
        this.number = input;
        this.ref = array;
    }
    /**function to convert cardinal number to word 
     * @function 
    */
    convert() {
        let obj = new num.NumberToWord();
        var r = obj.number_to_word(this.number);
        let ob = new rep.Replace(this.ref);
        ob.replacer(this.number, r);
    }
    /**function output 
     * @function
     * @return string converted string.
     */
    output() {
        let obj = new num.NumberToWord();
        let r = obj.number_to_word(this.number);
        return r.trim();
    }
}