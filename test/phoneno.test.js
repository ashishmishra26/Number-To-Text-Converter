import {Phoneno} from '../src/phoneno.js';
import {NumberToWord} from "../src/numberword.js";
test('Phone', () => {
    let obj=new Phoneno(null,"+918282907168");
    expect(obj.output()).toBe("+nine one eight two eight two nine zero seven one six eight");
})
/*test('Time', () => {
    let obj=new Phoneno(null,"+918282907168");
    expect(obj.convert()).toBe(undefined);
})*/