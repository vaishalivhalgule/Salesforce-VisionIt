import { LightningElement ,wire,track} from 'lwc';
import {registerListener} from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class PubSubSubscriberComp extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    @track msgVar;
    handleMsg(myMsg){
       
        this.msgVar=myMsg;
        alert('msgVar ' +this.msgVar);
    }
    connectedCallback(){
        registerListener('messagefrompublishercomp',this.handleMsg,this);
    }
    
}