import {
    Replace
} from "./replace.js";
import {
    NumberToWord
} from "./numberword.js";
export class DecimalFraction {
    constructor(array, input) {
        this.ref = array;
        this.df = input;
    }
    convert() {
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
            let obj2=new Replace(this.ref);
            obj2.replacer(this.df,b);
        }else if (text.match(/\d+[/]\d+/g)) {
            let arr = text.split("/");
            b.push(obj.number_to_word(arr[0]));
            b.push("/");
            b.push(obj.number_to_word(arr[1]));
            b=b.join(" ");
            b=b.replace(/\s+/g,"");
            let obj2=new Replace(this.ref);
            obj2.replacer(this.df,b);
        }
    }
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