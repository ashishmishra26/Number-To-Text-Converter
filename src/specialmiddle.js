/** special middle module
 * @module
 */
import * as time from "./time.js";
import * as dec from "./decimal-fraction.js";
import * as phone from "./phoneno.js";
import * as date from "./date.js";
import {
    Money
} from "./money.js";
/**Special Middle class
 * @class
 */
export class SpecialMiddle {
/**constructor of Special middle class
 * @constructor
 * @param {object|string} 
 */
    constructor(array, input) {
        this.middle = input;
        this.ref = array;
    }
    /**transfer function
     * @function
     */
    transfer() {
        if (this.middle.match(/\d{1,2}[:][0-5][0-9]/g)) {
            let obj = new time.Time(this.ref, this.middle);
            obj.convert();
        } else if (this.middle.match(/\d+[.]\d+|\d+[/]\d+/g)) {
            let obj2 = new dec.DecimalFraction(this.ref, this.middle);
            obj2.convert();
        } else if (this.middle.match(/[+]\d{12}|[0]\d{10}/g)) {
            let obj3 = new phone.Phoneno(this.ref, this.middle);
            obj3.convert();
        } else if (this.middle.match(/\d{1,4}[-]\d{1,2}[-]\d{1,4}|\d{1,4}[/]\d{1,2}[/]\d{1,4}/g)) {
            let obj4 = new date.Date(this.ref, this.middle);
            obj4.convert();
        } else if (this.middle.match(/^\$?\d+(,\d{1,})*(\.\d*)?$/)) {
            let obj5 = new Money(this.ref, this.middle);
            obj5.convert();
        }

    }
}