import * as ordinal from './ordinal.js';
import {
    Replace
} from './replace.js';
import {
    NumberToWord
} from './numberword.js';
export class SuffixPrefix {
    constructor(array, input) {
        this.ref = array;
        this.mix = input;
    }
    check() {
        if (this.mix.match(/\d+st|\d+nd|\d+rd|\d+th/g)) {
            console.log(ordinal);
            let obj = new ordinal.Ordinal(this.ref, this.mix);
            obj.convert();
        } else {
            let s=this.mix;
            let r = /\d+/g;
            let m;
            let a = [];
            while ((m = r.exec(s)) != null) {
                a.push(m[0]);
            }
            let obj=new NumberToWord();
            for (let k = 0; k < a.length; k++){
                var str = obj.number_to_word(a[k]);
                s = s.replace(a[k], str);
            }
            s=s.replace(/\s+/g,'');
            s = s.replace("onest", "first");
            s = s.replace("twond", "second");
            s = s.replace("threerd", "third");
            s = s.replace("fiveth", "fifth");
            s = s.replace("nineth", "ninth");
            s=s.trim();
         let obj2 = new Replace(this.ref);
         obj2.replacer(this.mix,s);
        }
    }
    output(){
        let s=this.mix;
            let r = /\d+/g;
            let m;
            let a = [];
            while ((m = r.exec(s)) != null) {
                a.push(m[0]);
            }
            let obj=new NumberToWord();
            for (let k = 0; k < a.length; k++){
                var str = obj.number_to_word(a[k]);
                s = s.replace(a[k], str);
            }
            s=s.replace(/\s+/g,'');
            s = s.replace("onest", "first");
            s = s.replace("twond", "second");
            s = s.replace("threerd", "third");
            s = s.replace("fiveth", "fifth");
            s = s.replace("nineth", "ninth");
            s=s.trim();
            return s;
    }
}