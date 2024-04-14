import { LightningElement,api } from 'lwc';

export default class DynamicInteractionTargetComp extends LightningElement {
    finalInputData;
    set inputDataFromSourceComp(val){
        this.finalInputData=val;
    }
    @api
    get inputDataFromSourceComp(){
        return this.finalInputData;
    }
}