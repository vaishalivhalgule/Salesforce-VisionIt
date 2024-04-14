import { LightningElement,wire,track} from 'lwc';
import GetAcc from '@salesforce/apex/GetAccountsForLwc.GetAcc';
import delAcc from '@salesforce/apex/GetAccountsForLwc.delAcc';
import delMultipleAcc from '@salesforce/apex/GetAccountsForLwc.delMultipleAcc';


export default class LightningDataTableComp extends LightningElement {

    actions = [ { label: 'Delete', name: 'delete' }]

     columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Phone', fieldName: 'Phone',type: 'phone'},
        { label: 'Industry', fieldName: 'Industry'},
        { type: 'action', typeAttributes: { rowActions: this.actions, menuAlignment: 'right' }}
        
    ];

    error;
    @track data;
    @track delAcc;
    @track acctId;

    @wire(GetAcc) wiredGetAcc({data,error}){
        if(data){
            this.data=data;
        }
        else if(error){
            this.error=error;
        }
    };

    //code for single deletion
    onRowAction(event){

        const action=event.detail.action;
        alert('action' +JSON.stringify(action));

        const row = event.detail.row;
        alert('row'+JSON.stringify(row));

        this.acctId=row.Id;
        alert('acctId'+row.Id);

        if(event.detail.action.name =='delete') {

        delAcc({ accId:row.Id})
        .then((res) =>{
            this.delAcc=res;
        }).catch((error)=>{
            console.error('Error deleting record: ' +error);
        });
    } 
    }

    //code for multiple deletion
    //@track delMulRec;
    @track selectedRows;
    handleSeletedRows(event){
        this.selectedRows=event.detail.selectedRows;
        alert('selectedRows'+JSON.stringify(this.selectedRows));
    }

    handleClick(event){
        alert('handleClick was called');
        const recordIds=this.selectedRows.map(row => row.Id);
        alert('recordIds' +recordIds);
        delMultipleAcc({ acctIds:recordIds})
        .then((res) =>{
            this.delMulRec=res;
        }).catch((error)=>{
            console.error('Error deleting record: ' +error);
        });
    }

}