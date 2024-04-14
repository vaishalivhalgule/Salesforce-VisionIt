import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class PagerenceLwcCmp extends  NavigationMixin(LightningElement) {

    NavigateToNewStudentPage(){
    this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Students__c',
                actionName: 'new'
            },
        });
    }
    
}