/**This is Decimal-Fraction module */
import {
    Replace
} from "./replace.js";
import {
    NumberToWord
} from "./numberword.js";
/** This is Decimal fraction class 
 * @class
*/
export class DecimalFraction {
    /**constructor of DecimalFraction  
     * @constructor
     * @param {object|string}
    */
    constructor(array, input) {
        this.ref = array;
        this.df = input;
    }
    /**convert function
     * @function -to convert decimal and fraction respectively.
     */
    convert() {
        let obj = new NumberToWord(this.ref);
        let text = this.df;
        let b = [];
        if (text.match(/\d+[.]\d+/g)) {
            let arr = text.split(".");
            b.push(obj.number_to_word(arr[0]));
            b.push(" ");
            b.push(" point ");
            b.push(" ");
            b.push(obj.number_to_word(arr[1]));
            b=b.join(" ");
            
            
            let obj2=new Replace(this.ref);
            obj2.replacer(this.df,b);
        }else if (text.match(/\d+[/]\d+/g)) {
            let arr = text.split("/");
            b.push(obj.number_to_word(arr[0]));
            b.push(" ");
            b.push(" by ");
            b.push(" ");
            b.push(obj.number_to_word(arr[1]));
            b=b.join(" ");
            
            let obj2=new Replace(this.ref);
            obj2.replacer(this.df,b);
        }
    }
    /** function to return output
     * @function
     * @return {string} -decimal/fraction in word format.
     */
    output(){
        let obj = new NumberToWord(this.ref);
        let text = this.df;
        let b = [];
        if (text.match(/\d+[.]\d+/g)) {
            let arr = text.split(".");
            b.push(obj.number_to_word(arr[0]));
            b.push(".");
            b.push(obj.number_to_word(arr[1]));
            b=b.join(" ");
            b=b.replace(/\s+/g,"");
            return b;
        }else if (text.match(/\d+[/]\d+/g)) {
            let arr = text.split("/");
            b.push(obj.number_to_word(arr[0]));
            b.push("/");
            b.push(obj.number_to_word(arr[1]));
            b=b.join(" ");
            b=b.replace(/\s+/g,"");
            return b;
        }
    }
}