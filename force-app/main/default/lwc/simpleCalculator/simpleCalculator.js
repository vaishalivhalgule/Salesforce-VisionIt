import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    firstNumVar;
    secondNumVar;
    result;
    inputChangeHandler(evt){
        const inpuName=evt.target.name;
        if(inpuName=='inp1'){
           this.firstNumVar= evt.target.value;
        }
        else{
            this.secondNumVar= evt.target.value; 
        }
    }
    
    addHandler(){
        const firstNumber=parseInt(this.firstNumVar);
        const secondNumber=parseInt(this.secondNumVar);
        alert('addition'+(firstNumber+secondNumber));
        this.result=' Result of ' + firstNumber + ' and ' + secondNumber + ' is ' + (firstNumber+secondNumber);

    }

    SubHandler(){
        const firstNumber=parseInt(this.firstNumVar);
        const secondNumber=parseInt(this.secondNumVar);
        alert('Substraction'+(firstNumber-secondNumber));
        this.result=' Result of ' + firstNumber + ' and ' + secondNumber + ' is ' + (firstNumber-secondNumber);
    }

    MultiPlyHandler(){
        const firstNumber=parseInt(this.firstNumVar);
        const secondNumber=parseInt(this.secondNumVar);
        alert('Multiplication'+(firstNumber*secondNumber));
        this.result=' Result of ' + firstNumber + ' and ' + secondNumber + ' is ' + (firstNumber*secondNumber);
    }

    DivideHandler(){
        const firstNumber=parseInt(this.firstNumVar);
        const secondNumber=parseInt(this.secondNumVar);
        alert('Division'+(firstNumber/secondNumber));
        this.result=' Result of ' + firstNumber + ' and ' + secondNumber + ' is ' + (firstNumber/secondNumber);
    }
}