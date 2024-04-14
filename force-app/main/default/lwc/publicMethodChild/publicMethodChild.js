import { LightningElement, api , track} from 'lwc';

export default class CheckboxGroupBasic extends LightningElement {
    @track  value =['red'];

    options=[
        { label: 'Red checkbox', value: 'red' },
        { label: 'Blue checkbox', value: 'blue' },
        { label: 'Black checkbox', value: 'black' }
        ];

    @api 
    checkbox(checkedVal){
        this.value.push(checkedVal);
    }
}