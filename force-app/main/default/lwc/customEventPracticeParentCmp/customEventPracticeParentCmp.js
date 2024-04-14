import { LightningElement } from 'lwc';

export default class CustomEventPracticeParentCmp extends LightningElement {
    hadleEvent(evt){
        const InputValue=evt.detail;
    }
    
}