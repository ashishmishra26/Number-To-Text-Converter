import {
    Replace
} from './replace.js';
import {
    NumberToWord
} from './numberword.js';
export class Money{
    constructor(array,input){
        this.ref=array;
        this.money=input;
    }
    convert(){
        let money=this.money;
        let arr=money.split(",");
        let curr=arr.join(" ");
        curr=curr.replace(/\s+/g,'');
        let obj=new NumberToWord();
        let change=obj.number_to_word(curr);
        let obj2=new Replace(this.ref);
        obj2.replacer(this.money,change);
    }
}