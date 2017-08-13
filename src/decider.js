/** Decider Module */
import * as car from "./cardinal.js";
import {
    SpecialMiddle
} from "./specialmiddle.js";
import * as suf from "./suffixprefix.js";
/** This is decider class 
 * @class
*/
export class Decider {
    /**decider function to decide the type of input
     * @function
     * @param {object|string} - reference of identifier class and input by identifier class.
     */
    decide(ref, input) {
        if (input.match(/^\d+$/)) {
            let obj = new car.Cardinal(ref, input);
            obj.convert();
        } else if (input.match(/\d+[.]\d+$|\d+[/]\d+$|[+]\d{12}$|[0]\d{12}$|\d{1,2}[:][0-5][0-9]$|\d{1,4}[-]\d{1,2}[-]\d{1,4}$|\d{1,4}[/]\d{1,2}[/]\d{1,4}$|^\$?\d+(,\d{1,})*(\.\d*)?$/)) {
            let obj2 = new SpecialMiddle(ref, input);
            obj2.transfer();
        } else {
            let obj3 = new suf.SuffixPrefix(ref, input);
            obj3.check();
        }
    }

}