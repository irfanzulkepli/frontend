import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proposal } from '../proposal';
import { ProposalsService } from '../proposals.service';


@Component({
  selector: 'delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Proposal Deletion</h4>
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Are you sure to delete the {{title}} by {{createdBy}}?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="modal.close('Close click')">Close</button>
      <button type="button" class="btn btn-danger" (click)="modal.close('Ok click');Delete(id);">Ok</button>
    </div>
  `
})
export class DeleteModal {
  @Input() id;
  @Input() title;
  @Input() createdBy;

  constructor(public modal: NgbActiveModal,private proposalService:ProposalsService,private router:Router) {}

  Delete(id:number){

    this.proposalService.deleteProposal(id).subscribe(
      data=>{
        this.router.navigateByUrl('/lms/proposals', {skipLocationChange: true}).then(() => {
          this.router.navigate(["/lms/proposals/proposal-list"])
        })
      },
      error=>{
        console.log("cannot delete record id="+id);
      }
    );

  }
  
}


@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.scss']
})
export class ProposalListComponent implements OnInit {

  length:number;
  pageSize:number=10;
  pageSizeOptions:number[]=[5,10,15,20,25,30];

  startRecord:number;
  lastRecord:number;

  pSize:number;
  pIndex;number;

  columnsName:string[]=['title', 'deal_title', 'createdBy', 'createdAt' ,'updatedAt' , 'status', 'actions'];
  columnsBoolean:boolean[]=[true,true,true,true,true,true];
  direction:boolean=true;
  directionString;string;

  searchText:string="";

  displayedColumns: string[]=[];

  dataSourcePaging : Proposal[];

  eventFirst:PageEvent;
  

  constructor(private proposalService:ProposalsService,private router:Router,public dialog: MatDialog 
    ,private activatedRoute:ActivatedRoute,private modalService:NgbModal) { }

  ngOnInit() {
    this.getDataTablePaginator(this.eventFirst);
    this.getColumnDisplay();
  }

  getDataTablePaginator(event:PageEvent){
    if(event===undefined){
      this.startRecord=1;
      this.lastRecord=10;
      this.pIndex=0;
      this.pSize=10;
    }else{
      this.pSize=event.pageSize;
      this.pIndex=event.pageIndex;
    }

    if(this.direction==true){
      this.directionString="ascending";
    }else{
      this.directionString="descending";
    }

    this.proposalService.getProposalList(this.searchText,this.pSize,(this.pSize*this.pIndex),this.directionString).subscribe(
      data=>{
        this.dataSourcePaging=data.data;
        this.length=data.page.total;
        this.startRecord=(this.pSize*this.pIndex)+1;
        this.lastRecord=(this.pSize*this.pIndex)+this.dataSourcePaging.length;
        
      },
      error=>{
        console.log("cannot get data table for proposal list!");
        console.log(error);

      }
    );
  }


  getColumnDisplay(){
    this.getDataTablePaginator(this.eventFirst);
    this.displayedColumns=[];
    for(let i=0;i<this.columnsBoolean.length;i++){
      if(this.columnsBoolean[i]===true){
        this.displayedColumns.push(this.columnsName[i]);
      }
    }
    this.displayedColumns.push('actions')
  }

  goToAddProposal(){
    //this.router.navigate(["lms/proposals/addproposal"]);
  }

  goToEditProposal(id:number){
    //this.router.navigate(["lms/proposals/editproposal",id])

  }

  openDeleteModal(id:number,title:string,createdBy:string){
    const modalRef = this.modalService.open(DeleteModal,{ centered: true });
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.createdBy = createdBy;
  }

  clearColumnDisplay(){
    this.columnsBoolean=[true,true,true,true,true,true];
    this.direction=true;
    this.getColumnDisplay();
  }

  // getOwners(lengthAll:number){
  //   for(let i=0;i<lengthAll;i++){
  //     if(this.owners.indexOf(this.dataSourceAll[i].createdBy.firstName+' '+this.dataSourceAll[i].createdBy.lastName)===-1){
  //       this.owners.push(this.dataSourceAll[i].createdBy.firstName+' '+this.dataSourceAll[i].createdBy.lastName);
  //     }
  //   }
  //   console.log("owner:");
  //   console.log(this.owners);

  // }


  Send(id:number){
    console.log(id);
    var tempProposal:Proposal;
    this.proposalService.getById(id).subscribe(
      data=>{
        tempProposal=data;
        console.log(tempProposal)
        tempProposal.status='Sent';
        tempProposal.createdBy=null;
        tempProposal.updatedBy=null;
        console.log(tempProposal)
        this.Refresh(tempProposal);
      },
      error=>{
        console.log("cannot found data")
      }
    );
    
  }

  Refresh(tempProposal:Proposal){
    this.proposalService.updateProposal(tempProposal).subscribe(
      data=>{
        console.log("updated to sent")
        this.router.navigateByUrl('/lms/proposals', {skipLocationChange: true}).then(() => {
          this.router.navigate(["/lms/proposals/proposal-list"]);
      });
      },
      error=>{
        console.log(error);
        console.log("cannot be updated")
      }
    );
  }

  // Duplicate(id:number){

  //   var currentDuplicate:Proposal;
  //   this.proposalService.getById(id).subscribe(
  //     data=>{
  //       currentDuplicate=data;
  //       currentDuplicate.id=null;
  //       currentDuplicate.createdBy=null;
  //       currentDuplicate.updatedBy=null;
  //       this.Add(currentDuplicate);
  //     },
  //     error=>{
  //       console.log("cannot get the existing record for duplicate")
  //     }
  //   );

  // }

  Add(newProposal:Proposal){
    this.proposalService.addProposal(newProposal).subscribe(
      data=>{
        this.router.navigateByUrl('/lms/proposals', {skipLocationChange: true}).then(() => {
          this.router.navigate(["/lms/proposals/proposal-list"])
        })
      },
      error=>{

      }
    )
  }

}
