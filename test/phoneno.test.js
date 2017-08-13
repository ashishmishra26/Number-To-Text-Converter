import {Phoneno} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/phoneno.js';
test('Phone', () => {
    let obj=new Phoneno(null,"+918282907168");
    expect(obj.output()).toBe("+nine one eight two eight two nine zero seven one six eight");
})
test('Time', () => {
    let obj=new Phoneno(null,"+918282907168");
    expect(obj.convert()).toBe(undefined);
})