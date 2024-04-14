import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    displayDiv=false;
    displayInput=false;
    
    showDivHandler(evt){
        //alert(evt.target.checked);
        this.displayDiv=evt.target.checked;

    }
    handleClick(evt){
       if(this.displayInput==false){
        this.displayInput=true;
       }
       else{
        this.displayInput=false;
       }
       //this.displayInput=!this.displayInput;

    }

}