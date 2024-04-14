import { LightningElement,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
export default class LdsComponent extends LightningElement {
    @wire(getRecord, {
        recordId: "0065i00000J4E0BAAV",
        fields: [Name]
        
      })
      OpportunityData;

    }