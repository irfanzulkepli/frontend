import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TEMPLATES } from '../../data/templates.data';
import { Template } from '../template';
import { TemplateService } from '../template.service';
import {DomSanitizer} from '@angular/platform-browser'


@Component( {
  selector: 'preview-modal',
  template:`
  <div class="modal-header">
    <h4 class="modal-title">{{title}}</h4>
    <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
  </div>
  <div class="modal-body" style="width:800px">
    <div [innerHTML]="contents">></div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .gr-modal-full .modal-dialog {
    min-width: 100%;
    margin: 0;
  }
  .gr-modal-full .modal-content {
    min-height: 100vh;
  }
  `]
})
export class Preview implements OnInit {
  @Input() title;
  @Input() contents;
  constructor(public modal: NgbActiveModal,private sanitizer: DomSanitizer) {
    this.contents=sanitizer.bypassSecurityTrustHtml(this.contents);
  }
  ngOnInit(): void {
  }
}


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  templates:Template[];
  limit:number=10;
  offset:number;
  searchText:string="";
  eventFirst:PageEvent;

  pSize:number;
  pIndex:number;

  length:number;
  pageSize:number=10;
  pageSizeOptions:number[]=[5,10,15,20,25,30];


  constructor(private templateService:TemplateService,private router:Router,private modalService:NgbModal) { }

  ngOnInit() {
    this.getDataTablePaginator(this.eventFirst);
  }

  getDataTablePaginator(event:PageEvent){

    if(event===undefined){
      this.pIndex=0;
      this.pSize=10;
    }else{
      this.pSize=event.pageSize;
      this.pIndex=event.pageIndex;
    }

    this.templateService.getTemplateList(this.searchText,this.pSize,(this.pSize*this.pIndex),"ascending").subscribe(
      data=>{
        this.templates=data.data;
        this.length=data.page.total
      },
      error=>{
        console.log("template list not received");
      }
    );
  }

  preview(title:string,contents:string){
    const previewModal=this.modalService.open(Preview,{windowClass: 'gr-modal-full'});
    previewModal.componentInstance.title=title;
    previewModal.componentInstance.contents=contents;
  }

  goToAddTemplate(){
    //this.router.navigate(["/lms/proposals/addtemplate"]);
  }

  goToEditTemplate(id:number){
    //this.router.navigate(["lms/proposals/edittemplate",id])
  }

  
}
