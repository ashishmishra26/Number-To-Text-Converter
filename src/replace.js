export class Replace {
    constructor(array) {
        this.ref = array;
    }
    replacer(token, word) {
        this.ref.text = this.ref.text.replace(token, word);
        this.ref.count++;
        if (this.ref.a.length === this.ref.count) {
            document.getElementById("result").innerHTML = this.ref.text;
        }
    }
}