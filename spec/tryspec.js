import {
    Identifier
} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/identifier.js';
import {
    Decider
} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/decider.js';
import {
    Cardinal
} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/cardinal.js';
import {
    Date
} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/date.js';
import {
    NumberToWord
} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/numberword.js';
describe("", function () {
    beforeAll(function () {
        var temp = '<input type="text" id="text-1"><button type="button" id="button-1" class="btn">click</button> <p id="result"></p>';
        document.body.insertAdjacentHTML("afterbegin", temp);
    });

    describe("", function () {
        it(" ", function () {
            let text = "hi 100";
            let obj = new Identifier(text);
            obj.identify();
            console.log(text);
            expect(obj.count).toBe(0);
        });
    });
    describe(" ", function () {
        it(" ", function () {
            let d = "23-12-2015"
            let obj = new Date(null, d);
            let x = obj.convert();
            expect(x).toBe("twenty three-twelve-two  thousand fifteen");
        });
    });
    describe(" ", function () {
        it(" ", function () {
            let d = "23"
            let obj = new NumberToWord();
            let x = obj.number_to_word(d);
            expect(x.trim()).toBe("twenty three");
        });
    });
  describe(" ", function () {
        it(" ", function () {
            let d = "2"
            let obj = new NumberToWord();
            let x = obj.number_to_word(d);
            expect(x.trim()).toBe("two");
        });
    });
});