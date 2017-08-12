import * as car from './cardinal.js';
import {
    SpecialMiddle
} from './specialmiddle.js';

import * as suf from './suffixprefix.js';
export class Decider {
    constructor() {

    }
    decide(ref,input) {
        if (input.match(/^\d+$/)) {
            console.log(input, "cardinal");
            let obj = new car.Cardinal(ref, input);
            obj.convert();
        } else if (input.match(/\d+[.]\d+$|\d+[\/]\d+$|[+]\d{12}$|[0]\d{12}$|\d{1,2}[:][0-5][0-9]$|\d{1,4}[-]\d{1,2}[-]\d{1,4}$|\d{1,4}[\/]\d{1,2}[\/]\d{1,4}$|^\$?\d+(,\d{1,})*(\.\d*)?$/)) {
            console.log(input, "middle");
            let obj2 = new SpecialMiddle(ref, input);
            obj2.transfer();
        } else {
            console.log(input, "suffix");
            let obj3 = new suf.SuffixPrefix(ref, input);
            obj3.check();
        }
    }

}