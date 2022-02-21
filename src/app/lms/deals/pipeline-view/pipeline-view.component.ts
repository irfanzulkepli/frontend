import { Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pipeline-view',
  templateUrl: './pipeline-view.component.html',
  styleUrls: ['./pipeline-view.component.scss']
})
export class PipelineViewComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  cols = [
    'Col 1',
    'Col 2',
    'Col 3'
  ]

  deals = [
    'Deal 1',
    'Deal 2',
    'Deal 3'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.deals, event.previousIndex, event.currentIndex);
  }

  /**
   * Open modal
   * @param content modal content
   */
   openProfile(content: any) {
    this.modalService.open(content, { size: 'xl'});
  }

    /**
   * Open modal
   * @param content modal content
   */
     addCard(content: any) {
      this.modalService.open(content);
    }
}
