import { LightningElement } from 'lwc';
import createAccRec from "@salesforce/apex/CreateAccRecThroughLwc.createAccRec";

export default class MyComponent extends LightningElement {
    accountName;
    accountIndustry;

    handleNameChange(event){
        this.accountName=event.target.value;
    }

    handleIndustryChange(event){
        this.accountIndustry=event.target.value;
        //alert('Industry: '+this.accountIndustry);
    }

    handleClick(){
        alert('result');
        createAccRec({accName:this.accountName,accIndustry:this.accountIndustry})
        .then(result=>{
            alert('result:',result);
        })
        .catch(error=>{
            console.error('Error creating account: ', error);
        });

    }
   

}