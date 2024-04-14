import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/ApexCntrlForWire.getAccounts'; 
import getContacts from '@salesforce/apex/ApexCntrlForWire.getContacts';
import getOpportunity from '@salesforce/apex/ApexCntrlForWire.getOpportunity'; 
import searchAccount from '@salesforce/apex/ApexCntrlForWire.searchAccount'; 

export default class WireLwcComponent extends LightningElement {
    contactsList=[];
    contactsListVar;
    OpportunityVar;
    @track accountCounts;
    //wire as a property
    @wire(getAccounts) wiredGetAccounts;
    @wire(getOpportunity) wiredOpportunity;

    //wire as a function
    @wire(getContacts) wiredgetContacts({error,data}){
        if (data) {
            this.contactsListVar = data;
        } else if (error) {
            console.log('error' +error);
        }
    }
   
    handleClick(){
        this.accountCounts=this.template.querySelector('lightning-input').value;
    }
    @wire(searchAccount,{intVar:'$accountCounts'}) wiredsearchAccount;
}