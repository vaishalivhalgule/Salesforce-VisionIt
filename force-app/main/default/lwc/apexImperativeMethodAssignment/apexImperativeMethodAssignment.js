import { LightningElement ,wire,track} from 'lwc';
import getAccList from '@salesforce/apex/ImperativeMethCntrl.getAccList'; 
import getRelconList from '@salesforce/apex/ImperativeMethCntrl.getRelconList'; 

export default class ApexImperativeMethodAssignment extends LightningElement {
    accListVar;
    @track error;
    @track contactListVar=[];

    @wire(getAccList) wiredgetAccList({error,data}){
        if (data) {
            this.accListVar = data;
        } else if (error) {
            console.log('error' +error);
        }
    }

   handleRadioButton(evt){
        alert('handleRadioButton called');
        const acctId=evt.target.value;
        alert('accid' + acctId);

        getRelconList({accid:acctId}).then(result => {
			this.contactListVar = result;
            alert('contactList :' +JSON.stringify(this.contactListVar));
			this.error = undefined;
		})
		.catch(error => {
			this.error = error;
			this.contactListVar = undefined;
		})
    }

     /*handleRadioButton(evt){
        alert('handleRadioButton called');
        const acctId=evt.target.value;
        alert('accid' + acctId);

        getRelconList({accid:acctId}).then(function(resp){
            this.contactListVar = resp;
            alert('contactList :' +JSON.stringify(this.contactListVar));
            this.error = undefined;
        }).catch(function(error){
            this.error = error;
            this.contactListVar = undefined;
        });
    }*/
    
}