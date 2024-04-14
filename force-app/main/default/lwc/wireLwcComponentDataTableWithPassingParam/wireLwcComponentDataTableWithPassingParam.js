import { LightningElement,wire,track} from 'lwc';
import getAccounts from '@salesforce/apex/ApexCntrlForWireLightningDataTable.getAccounts'; 
export default class WireLwcComponentDataTableWithPassingParam extends LightningElement {
    @track accountCounts;
    @track searchAcounts;

    handleClick(){
        this.accountCounts=this.template.querySelector('[data-inp1="inpVal1"]').value;
        this.searchAcounts=this.template.querySelector('[data-inp2="inpVal2"]').value;

    }
    @wire(getAccounts,{intVar:'$accountCounts',searchString:'$searchAcounts'}) wiredgetAccounts;

}