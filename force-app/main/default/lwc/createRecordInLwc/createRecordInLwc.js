import { LightningElement, track } from 'lwc';
import createRecord from '@salesforce/apex/createAccountRecord.createRecord';
export default class CreateRecordInLwc extends LightningElement {
    @track inputVar;
    //@track accObj={};
    /*handleInputChange(evt){
        this.inputVar=evt.target.value;
    }*/

    handleClick(){
        this.inputVar=this.template.querySelector('lightning-input').value;
        //var inputValue=this.inputVar;
        var accObj={};
        alert('inputVar'+this.inputVar);
        accObj.Name=this.inputVar;
        alert('accObj'+JSON.stringify(accObj));
        createRecord({acc:accObj}).then(res=>{
            alert('response'+JSON.stringify(res));
        }).catch(error=>{
            alert('error'+JSON.stringify(error));
        });
    }
}