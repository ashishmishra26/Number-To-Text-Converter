import {Time} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/time.js';
test('Time', () => {
    let obj=new Time(null,"9:30");
    expect(obj.output()).toBe("nine thirty");
})
test('Time', () => {
    let obj=new Time(null,"9:30");
    expect(obj.convert()).toBe(undefined);
})