import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pipeline-view',
  templateUrl: './pipeline-view.component.html',
  styleUrls: ['./pipeline-view.component.scss']
})
export class PipelineViewComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
     centerModal(centerDataModal: any) {
      this.modalService.open(centerDataModal, { centered: true });
    }
  

}
