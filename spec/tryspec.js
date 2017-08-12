import {Identifier} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/identifier.js'; 
import {Decider} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/decider.js'; 
import {Cardinal} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/cardinal.js'; 
describe("", function () {
    beforeAll(function () {
        var temp = '<input type="text" id="text-1"><button type="button" id="button-1" class="btn">click</button> <p id="result"></p>';
        document.body.insertAdjacentHTML("afterbegin", temp);
    });
    
    describe("",function(){
     it(" ",function(){
      let text="hi 100";   
      let obj=new Identifier(text);
      obj.identify();
      expect(obj.count).toBe(0);
     });
    });

    describe("",function(){
     it(" ",function(){
      let text="100";   
      let obj=new Decider(this,text);
      obj.decide();
      var spy=Cardinal;
      spyOn(spy,'convert');
      expect(spy.convert).toHaveBeenCalled();
     });
    });
});