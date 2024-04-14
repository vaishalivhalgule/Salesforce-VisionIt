import { LightningElement, api } from 'lwc';

export default class ChildLwcComponent extends LightningElement {
    childMsg;
    @api
    greetingMsg(msgVar){
        this.childMsg=msgVar.toUpperCase();
    }
}