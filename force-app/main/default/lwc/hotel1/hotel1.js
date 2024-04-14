import { LightningElement,track } from 'lwc';

export default class Hotel1 extends LightningElement {
@track hotelRoomsVar=[];
@track inputVal1;
@track inputVal2;

handleRoomNumberChange(event) {
    this.inputVal1 = event.target.value;
    //alert(this.inputVal1);
}

handleRoomCapacityChange(event) {
    this.inputVal2 = event.target.value;
    //alert(this.inputVal2);
}

handleClick(evt){

    if (this.inputVal1 && this.inputVal2) {
        this.hotelRoomsVar.push({
            roomNo: this.inputVal1,
            roomCapacity1: this.inputVal2
            });
    }

    alert('hotelRoomsVar'+JSON.stringify(this.hotelRoomsVar));
}
}