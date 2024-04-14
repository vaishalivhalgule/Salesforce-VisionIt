import { LightningElement } from 'lwc';

export default class DynamicInteractionSourceComp extends LightningElement {

    handleClick(){
        const inputVal=this.template.querySelector('lightning-input').value;
        alert('inputVal'+inputVal);
        const dynamicInteractionEvent =new CustomEvent('mydynamicinteractionevent',{
            detail:{inputData:inputVal}
         })
         this.dispatchEvent(dynamicInteractionEvent);
    }
   
}