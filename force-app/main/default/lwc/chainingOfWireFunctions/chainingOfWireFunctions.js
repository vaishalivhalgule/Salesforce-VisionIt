import { LightningElement,wire,track } from 'lwc';
import getAccount from '@salesforce/apex/ApexCntrlforWireChaining.getAccount'; 
import getRelCons from '@salesforce/apex/ApexCntrlforWireChaining.getRelCons'; 

export default class chainingOfWireFunctions extends LightningElement {
    
    @track AccountVar;
    @track acctid;
    @track contactList=[];

    @wire(getAccount) wiredgetAccount({error,data}){
        if (data) {
            this.AccountVar = data;
            this.acctid=data.Id;
            //alert(this.acctid);
        } else if (error) {
            console.log('error' +error);
        }
    }

    @wire(getRelCons,{accid :'$acctid'}) wiredgetRelCons({error,data}){
        if (data) {
            //alert(this.acctid);
            this.contactList = data;
            alert('ContactList'+JSON.stringify(this.contactList));
            
        } else if (error) {
            console.log('error' +error);
        }
    }
}