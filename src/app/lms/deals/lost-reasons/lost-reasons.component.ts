import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LOSTREASONS } from '../../data/lost-reasons';

@Component({
  selector: 'app-lost-reasons',
  templateUrl: './lost-reasons.component.html',
  styleUrls: ['./lost-reasons.component.scss']
})
export class LostReasonsComponent implements OnInit {

  public lostReasons = LOSTREASONS;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Open modal
   * @param content modal content
   */
     openModal(content: any) {
      this.modalService.open(content);
    }

  /**
   * Open center modal
   * @param centerDataModal center modal data
   */
  centerModal(centerDataModal: any) {
    this.modalService.open(centerDataModal, { centered: true });
  }

}
