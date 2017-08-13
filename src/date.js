/** This is Date module */
import {
    Replace
} from "./replace.js";
import {
    NumberToWord
} from "./numberword.js";
/** This is Date class 
 * @class 
*/
export class Date {
    /**constructor of Date class 
     * @constructor
     * @param {object|string}
    */
    constructor(array, input) {
        this.date = input;
        this.ref = array;
    }
    /**convert function to convert the date in word format
     * @function 
    */
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
    /**output function to return the converted value
     * @function
     * @return {string} - converted value in string format. 
    */
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