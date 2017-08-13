import {
    Time
} from '../src/time.js';
import {
    NumberToWord
} from "../src/numberword.js";
test('Time', () => {
    let obj = new Time(null, "9:30");
    expect(obj.output()).toBe("nine thirty");
})
/*test('Time', () => {
    let obj = new Time(null, "9:30");
    expect(obj.convert()).toBe(undefined);
})*/