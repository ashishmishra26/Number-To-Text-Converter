import * as imp from './decider.js';
export class Identifier {
    constructor(input) {
        this.text = input;
        this.a = [];
        this.count = 0;
    }
    identify() {
        let string = this.text.split(" ");
        console.log(string);
        for (let i = 0; i < string.length; i++) {
            let reg = /\d+/g;
            let m;
            if ((m = reg.exec(string[i])) !== null) {
                this.a.push(string[i]);
            }
        }
        console.log(this.a);
        if(this.a.length !== 0) {
            for (let j = 0; j < this.a.length; j++) {
                let that = this;
                setTimeout(function () {
                    let obj = new imp.Decider();
                    obj.decide(that, that.a[j]);
                }, 0);
            }
        }
        else{
            document.getElementById("result").innerHTML=this.text;
        }
    }
    print() {
        console.log(this.text, "returned");
    }
}