import { LightningElement } from 'lwc';

export default class SetterOrGetterMethodLWC extends LightningElement {
   //inpVal;
    finalInputVar;
   set inpVal(val){
    this.finalInputVar=val;
   }

   get inpVal(){
    return this.finalInputVar;
   }
   inputChangeHandler(evt){
        this.inpVal=evt.target.value;
    }
}