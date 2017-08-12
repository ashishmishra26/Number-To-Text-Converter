import {Identifier} from './identifier.js'

test('Dog.bark', () => {
    let input = "hi 100";
    const obj = new Identifier(input);
    obj.identify();
    jest.fn()
    expect(obj.decide).toHaveBeenCalled();
})