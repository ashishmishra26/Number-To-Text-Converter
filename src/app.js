import {
    Identifier
} from "./identifier.js";
let convert = () => {
    let input = document.getElementById("text-1").value;
    let obj = new Identifier(input);
    obj.identify();
};
var e = document.getElementById("button-1");
if (e) {
    addEventListener("click", convert);
}