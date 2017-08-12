import {Identifier} from './identifier.js';
export class Chunker{
    constructor(inp){
        this.input=inp;
        this.i=0;
    }
    follow(){
      while(this.input.length>2){
        let index=this.input.indexOf(" ",2);
        console.log(index);
        console.log(this.input.substring(this.i,index));
        let obj=new Identifier( this.input.substring(this.i,index));
        this.i=index+1;
        console.log(this.i,"hi");
        this.input=this.input.substring(this.i,);
        console.log(this.input.length);
        obj.identify();
      }
        let obj=new Identifier(this.input);
        obj.identify();


    }


}