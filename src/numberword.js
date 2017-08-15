/**Module to convert Number into word format.
 *  @module
 */
export class NumberToWord {
    /**Constructor of NumberToWord class
     * @constructor
     */
    constructor() {
        this.one = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        this.digit = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        this.tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninty"];
        this.beyond = [" ", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion"];
    }
    /**Thid is convert function 
     * @function
     * @param {number} [times=3]  
     */
    convert(hplace, tplace, oplace) {
        let string = "";
        if (hplace > 0) {
            string += this.one[hplace] + " hundred ";
        }
        if (tplace === 1) {
            string += this.digit[oplace] + " ";
        } else if (tplace > 1) {
            string += this.tens[tplace] + " ";
            string += this.one[oplace] + " ";
        } else {
            string += this.one[oplace] + " ";
        }
        string.trim();
        return string;
    }
    /**Thid is convert function 
     * @function
     * @param {number}  input provided by different modules.
     * @return {string} -converted number in string.  
     */
    number_to_word(number) {
        if (isNaN(number)) {
            return undefined;
        }
        if (number === "0") {
            return "zero" + " ";
        }
        let temp = number,
            digit_array = [];
        while (temp > 0) {
            digit_array.push(temp % 10);
            temp = temp / 10;
            temp = Math.floor(temp);
        }
        if (digit_array.length % 3 !== 0)
            digit_array.push(0);
        if (digit_array.length % 3 !== 0)
            digit_array.push(0);
        let text = [],
            position = 0;
        for (let i = 2; i < digit_array.length; i += 3, position++) {
            let unit = this.convert(digit_array[i], digit_array[i - 1], digit_array[i - 2]);
            if (unit.trim() !== "") {
                text.push(unit+this.beyond[position]);
            }
        }
        let output = "";
        for (let k = text.length - 1; k >= 0; k--) {
            output += text[k] + " ";
        }
        (output.trim());
        return output;

    }
}