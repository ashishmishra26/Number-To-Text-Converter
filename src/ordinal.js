/**This is Ordinal Module
 * @module
 */
import {
    Replace
} from "./replace.js";
import {
    NumberToWord
} from "./numberword.js";
/**Ordinal class
 * @class 
 */
export class Ordinal {
    /** constructor of Ordinal class
     * @constructor 
     * @param {object|string}
     */
    constructor(array, input) {
        this.number = input;
        this.ref = array;
    }
    /**convert function 
     * @function 
    */
    convert() {
        let s = this.number;
        let r = /\d+/g;
        let m;
        let a = [];
        while ((m = r.exec(s)) != null) {
            a.push(m[0]);
        }
        let obj = new NumberToWord();
        for (let k = 0; k < a.length; k++) {
            var str = obj.number_to_word(a[k]);
            s = s.replace(a[k], str);
        }
        s = s.replace(/\s+/g,"");
        s = s.replace("onest", "first");
        s = s.replace("twond", "second");
        s = s.replace("threerd", "third");
        s = s.replace("fiveth", "fifth");
        s = s.replace("nineth", "ninth");
        s = s.trim();
        let obj2 = new Replace(this.ref);
        obj2.replacer(this.number, s);

    }
    /**output function 
     * @function
     * @return {string} -converted value of ordinal number in word form.
    */
    output() {
        let s = this.number;
        let r = /\d+/g;
        let m;
        let a = [];
        while ((m = r.exec(s)) != null) {
            a.push(m[0]);
        }
        let obj = new NumberToWord();
        for (let k = 0; k < a.length; k++) {
            var str = obj.number_to_word(a[k]);
            s = s.replace(a[k],str);
        }
        s = s.replace(/\s+/g,"");
        s=s.replace("onest","first");
        s=s.replace("twond","second");
        s=s.replace("threerd","third");
        s=s.replace("fiveth","fifth");
        s=s.replace("nineth","ninth");
        return s;
    }
}