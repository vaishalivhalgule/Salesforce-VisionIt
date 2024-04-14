import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class HomePageForInsuranceManagement extends NavigationMixin(LightningElement) {
    handleclick(){
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
                componentName: "c__viewAndAddAgentCmp"
            }
            
        });
    }

    handleclick1(){
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Policy_Holder__c',
                actionName: 'home',
            },
        });
    }

    handleclick2(){
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Life_Insurance__c',
                actionName: 'home',
            },
        });
    }

    handleclick3(){
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Motor_Insurance__c',
                actionName: 'home',
            },
        });
    }

}