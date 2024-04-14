
import { LightningElement, wire } from 'lwc';
import {
   
    MessageContext,
    publish,
  
} from 'lightning/messageService';
import dataSelected from '@salesforce/messageChannel/abcd__c';

export default class PublisherLwcComponent extends LightningElement {
    @wire(MessageContext)
    wiredMsgContext;

    publishHandler(){
        const inpVal=this.template.querySelector('lightning-input').value;
        alert('publishHandler was called');
        publish(this.wiredMsgContext, dataSelected,{
        recordData : 'This is publish record Data',
        inputVal:inpVal
        });
    }
}
