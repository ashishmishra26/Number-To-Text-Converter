/**Replace Module
 * @module
 */
/**Replace class
 * @class
 */
export class Replace {
    /**constructor of replace class
     * @constructor
     * @param {object} -reference of identifier class
    */
    constructor(array) {
        this.ref = array;
    }
    /**this is replacer function
     * @function
     * @param {string|string} - original value and changed value to replace.
     */
    replacer(token, word) {
        this.ref.text = this.ref.text.replace(token, word);
        this.ref.text=this.ref.text.replace(/  +/g," ");
        
        this.ref.count++;
        if (this.ref.a.length === this.ref.count) {
            document.getElementById("result").innerHTML = this.ref.text;
        }
    }
}