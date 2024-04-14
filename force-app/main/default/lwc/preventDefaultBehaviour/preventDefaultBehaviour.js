import { LightningElement,api } from 'lwc';
import { NavigationMixin } from "lightning/navigation";


export default class PreventDefaultBehaviour extends NavigationMixin(LightningElement) {
    connectedCallback(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
            state: {
                defaultFieldValues : 'Name=Abc123,Industry=Banking',
                nooverride: '1'
            }
        });
      }
    

}