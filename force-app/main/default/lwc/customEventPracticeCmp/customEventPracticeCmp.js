import { LightningElement } from 'lwc';

export default class CustomEventPracticeCmp extends LightningElement {
    inpVal;
    handleChange(evt){
        evt.preventDefault();
        this.inpVal=evt.target.value;

        const selectEvent=new CustomEvent(myfirstcustomevent,
            {
            detail:this.inpVal
        });
        this.dispatchEvent(selectEvent);
    }
    
}