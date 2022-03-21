import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DealsModalComponent } from 'src/app/lms/components/deals-modal/deals-modal.component';
import { LeadService } from '../../lead.service';

@Component({
  selector: 'app-deals-card',
  templateUrl: './deals-card.component.html',
  styleUrls: ['./deals-card.component.scss']
})
export class DealsCardComponent implements OnInit {

  @Output() onDealsEmit = new EventEmitter();

  constructor(
    private leadService: LeadService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  openDealsModal() {
    this.onDealsEmit.emit(true);
  }

}
