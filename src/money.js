/**This is Money module
@module
*/
import {
    Replace
} from "./replace.js";
import {
    NumberToWord
} from "./numberword.js";
/**This is Money class 
 * @class
*/
export class Money {
    /**constructor of Money class 
     * @constructor 
     * @param {object|string}
    */
    constructor(array, input) {
        this.ref = array;
        this.money = input;
    }
    /**convert function 
     * @function 
    */
    convert() {
        let money = this.money;
        let arr = money.split(",");
        let curr = arr.join(" ");
        curr = curr.replace(/\s+/g,"");
        let obj = new NumberToWord();
        let change = obj.number_to_word(curr);
        let obj2 = new Replace(this.ref);
        obj2.replacer(this.money, change);
    }
    /**output function to return value
     * @function
     * @return {string} -converted value of money value. 
    */
    output() {
        let money = this.money;
        let arr = money.split(",");
        let curr = arr.join(" ");
        curr = curr.replace(/\s+/g,"");
        let obj = new NumberToWord();
        let change = obj.number_to_word(curr);
        return change;
    }
}