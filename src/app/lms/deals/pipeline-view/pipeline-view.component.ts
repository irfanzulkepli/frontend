import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDealModalComponent } from '../add-deal-modal/add-deal-modal.component';

@Component({
  selector: 'app-pipeline-view',
  templateUrl: './pipeline-view.component.html',
  styleUrls: ['./pipeline-view.component.scss']
})
export class PipelineViewComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  deals = [
    'Deal 1',
    'Deal 2',
    'Deal 3'
  ];

  deals2 = [
    'Deal 4',
    'Deal 5',
    'Deal 6'
  ];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('Transfering item to new container')
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

   openProfile() {
    this.modalService.open(AddDealModalComponent, { size: 'xl'});
  }

    /**
   * Open modal
   * @param content modal content
   */
     addCard(content: any) {
      this.modalService.open(content);
    }
}
