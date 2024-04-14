import { LightningElement,track } from 'lwc';

export default class ParentEventComponent extends LightningElement {
   /* msgVar;
    handleEvent(evt){
       this.msgVar= evt.detail;
    }*/

    @track msg;

    handleCustomEvent(event) {
        this.msg = event.detail;
        alert('msg from child comp' +this.msg);
        
    }
  
    constructor() {
        super()
        this.template.addEventListener('myfirstcustomevent', this.handleCustomEvent.bind(this));
    }

    
}