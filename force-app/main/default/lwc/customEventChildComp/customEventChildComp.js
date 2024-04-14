import { LightningElement,track} from 'lwc';


export default class CustomEventParentComponent extends LightningElement {
    inpVal1;
    inpVal2;
    @track RoomInfo=[];
    
    
    inputChangehandler(evt){
        this.inpVal1=evt.target.value;
        //alert('inpVal1 '+this.inpVal1);
    }

    inputChangehandler1(evt){
        this.inpVal2=evt.target.value;
        //alert('inpVal2'+this.inpVal2);
    }

    handleclick(){
        if(this.inpVal1 && this.inpVal2){
            this.RoomInfo.push({RoomNo:this.inpVal1,RoomCapacity:this.inpVal2});
            alert('RoomInfo'+JSON.stringify(this.RoomInfo));
        }
    }

    clickHandler(event){
        event.preventDefault();
        const name = event.target.value;
        const selectEvent = new CustomEvent('mycustomevent', {
            detail: RoomInfo
        });
       this.dispatchEvent(selectEvent);
    }
    


}