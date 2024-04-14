import { LightningElement ,api} from 'lwc';

export default class ChildCmpforAuraCmp extends LightningElement {
    @api Name;

    @api showMessage(greeting){
        alert(greeting);
    }
}