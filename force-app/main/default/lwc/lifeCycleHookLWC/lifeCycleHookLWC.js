import { LightningElement, wire } from 'lwc';

export default class LifeCycleHookLWC extends LightningElement {
    inpVal;
    renderedCallback(){
        console.log('RenderedCallback called');
    }

    connectedCallback(){
        console.log('ConnectedCallbacks called');
    }

    constructor(){
        super();
        console.log('constructor called');
    }

    disconnectedCallback(){
        console.log('DisconnectedCallback called');
    }

    errorCallback(error, stack){
        console.log('ErrorCallback called');
    }

    changeHandler(evt){
        this.inpVal=evt.target.value;
    }
    
}