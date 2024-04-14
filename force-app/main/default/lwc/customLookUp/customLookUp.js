import { LightningElement,wire } from 'lwc';
import searchRecords from '@salesforce/apex/CustomLookupController.searchRecords';

export default class CustomLookUp extends LightningElement {
    searchKey = '';
    showResults = false;
    records = [];

    @wire(searchRecords, { searchKey: '$searchKey' })
    wiredRecords({ error, data }) {
        if (data) {
            this.records = data;
            this.showResults = true;
        } else if (error) {
            console.error(error);
        }
    }

    handleInputChange(event) {
        this.searchKey = event.target.value;
    }

    handleSelectRecord(event) {
        const selectedId = event.target.dataset.id;
        // Do something with the selected record id
        console.log('Selected Record Id:', selectedId);
        this.showResults = false; // Hide the results dropdown after selection
    }
}