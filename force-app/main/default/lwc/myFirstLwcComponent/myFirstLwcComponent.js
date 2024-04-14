import { LightningElement } from 'lwc';

export default class MyFirstLwcComponent extends LightningElement {
   
    firstInput;
    secondInput;
    Name='Vaishali'
    handleClick(){
        alert('Handleclick was called');
       this.firstInput= this.template.querySelector('lightning-input').value;
       this.secondInput=this.template.querySelector('[data-inp2="secinp"]').value;
       alert('firstInput'+this.firstInput);
       alert('secondInput'+this.secondInput);


    }
}