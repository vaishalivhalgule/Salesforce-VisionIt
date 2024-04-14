import { LightningElement,api } from 'lwc';
import Name from '@salesforce/schema/Students__c.Name';
import Student_Phone from '@salesforce/schema/Students__c.Student_Phone__c';
import Grade from '@salesforce/schema/Students__c.Grade__c';	

export default class RecordViewFormComp extends LightningElement {

    fields=[Name,Student_Phone,Grade];
     // Flexipage provides recordId and objectApiName
     @api recordId;
     @api objectApiName;

}