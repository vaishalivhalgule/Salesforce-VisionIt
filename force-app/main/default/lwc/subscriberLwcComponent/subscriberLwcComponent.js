import { LightningElement,wire} from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import dataSelected from '@salesforce/messageChannel/abcd__c';
export default class SubscriberLwcComponent extends LightningElement {
     recordDataVar;
    @wire(MessageContext) wiredContextMsg;

    connectedCallback(){
        this.subscribeToMessageChannel();
    }
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.wiredContextMsg,
                dataSelected,
               (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    handleMessage(msg) {
        console.log('handleMessage was called');
        this.recordDataVar = msg.recordData + ' ' + msg.inputVal;

    }

}