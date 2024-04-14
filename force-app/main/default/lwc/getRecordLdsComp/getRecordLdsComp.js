import { LightningElement,wire} from 'lwc';
import { getRecord,getFieldValue} from "lightning/uiRecordApi";
import customer_Email from "@salesforce/schema/Account.customer_Email__c";

export default class GetRecordLdsComp extends LightningElement {
    @wire(getRecord, {
        recordId: "0015i00000yqXRpAAM",
        fields: ['Account.Name', 'Account.Number_of_Contacts__c'],
       
      })
      wiredgetAccount;

      //using get function
      @wire(getRecord, {
        recordId: "0015i00000yqXRpAAM",
        fields: ['Account.Name', 'Account.Number_of_Contacts__c'],
       
      })
      wiredgetAccountdata;

      
      get acctName(){
        console.log('wired record data'+JSON.stringify(this.wiredgetAccountdata.data));
        if(this.wiredgetAccountdata.data){
         return this.wiredgetAccountdata.data.fields.Name.value;
        }
        return undefined;
      }

      get acctNoOfContacts(){
        
        if(this.wiredgetAccountdata.data){
         return this.wiredgetAccountdata.data.fields.Number_of_Contacts__c.value;
        }
        return undefined;
      }

      //using hard reference of the field through schema library

      @wire(getRecord, {
        recordId: "0015i00000yqXRpAAM",
        fields: [customer_Email],
       
      })
      wiredgetAcctRecordData;

      get customer_Email() {
        return getFieldValue(this.wiredgetAcctRecordData.data, customer_Email);
      }
    

}