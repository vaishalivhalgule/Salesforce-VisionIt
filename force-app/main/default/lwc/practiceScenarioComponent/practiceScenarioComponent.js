import { LightningElement,wire,track } from 'lwc';
import GetAcc from "@salesforce/apex/GetAccountsForLwc.GetAcc";
import GetAccounts from "@salesforce/apex/GetAccountsForLwc.GetAccounts";

export default class PracticeScenarioComponent extends LightningElement {
finalResult;
    connectedCallback(){
        GetAcc().then(result=>{
            //alert(JSON.stringify(result));
            this.finalResult=result;
        }).catch(error=>{
            alert('error:'+error);
        }); 
    }

    divHandler(evt){
//alert(evt.target.dataset.recid);
alert(evt.target.getAttribute('data-recid'));

    }


    actions=[{label:'delete',name:'delete'}];

    columns=[
        {label:'Id',fieldName:'Id'},
        {label:'Name',fieldName:'Name',type:'text'},
        {label:'Phone',fieldName:'Phone',type:'Phone'},
        {label:'Industry',fieldName:'Industry',type:'text'},
        {type:'action',typeAttributes:{ rowActions: this.actions,menuAlignment: 'right' }}
        ];

        @track accList;

        @wire(GetAccounts) wiredGetAccounts({error,data}){
            if(data){
               alert(JSON.stringify(data));
               this.accList=data;
            }
            else if(error){
                console.log('error' +error);
            }
        }

        handleRowAction(event){
            const actionName = event.detail.action.name; 
            alert(actionName);

            const row=event.detail.row;
            alert('row'+JSON.stringify(row));

            const rowId=row.Id;
            alert('rowId'+JSON.stringify(row.Id));
        }
}