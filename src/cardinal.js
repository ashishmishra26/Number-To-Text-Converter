import * as num from './numberword.js';
import * as rep from './replace.js';
export class Cardinal {
    constructor(array,input) {
        this.number = input;
        this.ref=array;
    }
    convert() {
        let obj = new num.NumberToWord();
        var r=obj.number_to_word(this.number);
        console.log(r);
        let ob=new rep.Replace(this.ref);
        ob.replacer(this.number,r);
    }
}