import { LightningElement,track } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @track searchInpVal;
    
    CheckboxSeachHandler(evt){
        this.searchInpVal=evt.target.value;
    }

    checkboxSelectedHandler(evt){
       var childComp= this.template.querySelector('c-public-method-child').checkbox(this.searchInpVal);
       
    }
}