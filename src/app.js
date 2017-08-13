/** This is entry module
 * @module
 * @author -Ashish Mishra
 */
import {
    Identifier
} from "./identifier.js";
/**arrow function
 * @function - to call identify function of identifier class with input value.
 */
let convert = () => {
    let input = document.getElementById("text-1").value;
    let obj = new Identifier(input);
    obj.identify();
};
/**EventListner for Html button */
var e = document.getElementById("button-1");
if (e) {
    addEventListener("click", convert);
}