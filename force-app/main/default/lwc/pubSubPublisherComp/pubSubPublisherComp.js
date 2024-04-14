import { LightningElement,wire } from 'lwc';
import {fireEvent} from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class PubSubPublisherComp extends LightningElement {
   
    @wire(CurrentPageReference) pageRef;

    
    clickHandler(){

        const inpVal=this.template.querySelector('lightning-input').value;
        alert('inpVal' +inpVal);
        fireEvent(this.pageRef, 'messagefrompublishercomp',inpVal);
    }
}