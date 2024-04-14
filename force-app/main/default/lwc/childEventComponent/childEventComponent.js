import { LightningElement } from 'lwc';

export default class ChildEventComponent extends LightningElement {
    
    handleChange(evt){
        evt.preventDefault();
        
        const selectEvent = new CustomEvent('myfirstcustomevent',{
            detail:{nameVar:evt.target.value,
                    name:'Vaishali'} 
                    
        });
       this.dispatchEvent(selectEvent);
    }
    
}