import { LightningElement ,track} from 'lwc';
import getContactListVar from '@salesforce/apex/ContactController.getContactList';

export default class ApexImperativeMethod extends LightningElement {
  @track contacts=[];
  @track error;

  handleLoad(){
    getContactListVar().then((resp) =>{
        this.contacts = resp;
    }).catch((err)=>{
        this.error = err;
    });
  }

 
  /*handleLoad(){
    getContactListVar().then(function(resp){
        this.contacts = resp;
    }).catch(function(err){
        this.error = err;
    });
  }*/
}