import {
  Replace
} from './replace.js';
import {
  NumberToWord
} from './numberword.js';
export class Ordinal {
  constructor(array, input) {
    this.number = input;
    this.ref = array;
  }
  convert() {
    let s = this.number;
    let r = /\d+/g;
    let m;
    let a = [];
    while ((m = r.exec(s)) != null) {
      a.push(m[0]);
    }
    let obj = new NumberToWord();
    for (let k = 0; k < a.length; k++) {
      var str = obj.number_to_word(a[k]);
      s = s.replace(a[k], str);
    }
    s=s.replace(/\s+/g,'');
    s = s.replace("one st", "first");
    s = s.replace("two nd", "second");
    s = s.replace("three rd", "third");
    s = s.replace("five th", "fifth");
    s = s.replace("nine th", "ninth");
    s = s.trim();
    let obj2 = new Replace(this.ref);
    obj2.replacer(this.number, s);

  }
  output(){
    let s = this.number;
    let r = /\d+/g;
    let m;
    let a = [];
    while ((m = r.exec(s)) != null) {
      a.push(m[0]);
    }
    let obj = new NumberToWord();
    for (let k = 0; k < a.length; k++) {
      var str = obj.number_to_word(a[k]);
      s = s.replace(a[k], str);
    }
    s=s.replace(/\s+/g,'');
    s = s.replace("one st", "first");
    s = s.replace("two nd", "second");
    s = s.replace("three rd", "third");
    s = s.replace("five th", "fifth");
    s = s.replace("nine th", "ninth");
    s = s.trim();
    return s;
  }
}