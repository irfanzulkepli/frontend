import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PIPELINES } from '../../data/pipelines.data';

@Component({
  selector: 'app-pipelines',
  templateUrl: './pipelines.component.html',
  styleUrls: ['./pipelines.component.scss']
})
export class PipelinesComponent implements OnInit {

  public colNames: string[] = ["Name", "Total Deal Value", "No. of Deals", "No. of Stage", "Date Created"];
  public pipelines = PIPELINES;

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
