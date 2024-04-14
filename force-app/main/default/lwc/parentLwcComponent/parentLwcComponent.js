import { LightningElement } from 'lwc';

export default class ParentLwcComponent extends LightningElement {
    inputChangeHandler(evt){
        var inputVal=evt.target.value;
        var childComp=this.template.querySelector('c-child-lwc-component').greetingMsg(inputVal);
    }
}