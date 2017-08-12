import {
    Replace
} from './replace.js';
import * as num from './numberword.js';
export class Time{
    constructor(array,input) {
        this.time = input;
        this.ref=array;
    }
    convert() {
        console.log(this.time);
        let a = [];
        a = this.time.split(":");
        let obj= new num.NumberToWord();
        let h1=obj.number_to_word(a[0]);
        let h2=obj.number_to_word(a[1]);
        let word=h1+" "+h2;
        let obj2=new Replace(this.ref);
        obj2.replacer(this.time,word);
    }
}