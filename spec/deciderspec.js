import {Decider} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/decider.js'; 
import {Identifier} from '/home/ashishmishra/Desktop/Number-To-Text-Converter/src/identifier.js'; 

describe("", function () {
    beforeAll(function () {
        var temp = '<input type="text" id="text-1"><button type="button" id="button-1" class="btn">click</button> <p id="result"></p>';
        document.body.insertAdjacentHTML("afterbegin", temp);
    });
    
    describe("",function(){
     it(" ",function(){
      let text="hi 100";  
      let ob=new Identifier("100");
      let obj=new Decider(obj.this,"100");
      obj.identify();
      expect(obj.count).toBe(0);
     });
    });
});