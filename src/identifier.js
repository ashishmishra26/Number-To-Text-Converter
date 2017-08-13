/**This is Identifier module */
import * as imp from "./decider.js";
/**Identifier class
 * @class Identifier class.
 */
export class Identifier {
    /**This is constructor 
     * @constructor
     * @param {string} input-input by user.  
    */
    constructor(input) {
        this.text = input;
        this.a = [];
        this.count = 0;
    }
    /**This id identify function 
     * @function
     * used to identify tokens which contain numbers in it.
    */
    identify() {
        let string = this.text.split(" ");
        for (let i = 0; i < string.length; i++) {
            let reg = /\d+/g;
            if ((reg.exec(string[i])) !== null) {
                this.a.push(string[i]);
            }
        }
        if (this.a.length !== 0) {
            for (let j = 0; j < this.a.length; j++) {
                let that = this;
                setTimeout(function () {
                    let obj = new imp.Decider();
                    obj.decide(that, that.a[j]);
                }, 0);
            }
        } else {
            document.getElementById("result").innerHTML = this.text;
        }
    }
}