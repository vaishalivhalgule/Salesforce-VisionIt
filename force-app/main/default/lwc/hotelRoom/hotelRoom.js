import { LightningElement,api} from 'lwc';

export default class HotelRoom extends LightningElement {
     @api hotelRoomInfo={};
     
    //{roomNumber:"a-01",RoomCapacity:"5"}
   @api showRoomInfo=false;
   
}