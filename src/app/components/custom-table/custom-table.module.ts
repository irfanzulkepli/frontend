import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CustomTableComponent } from './custom-table.component';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [CustomTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    NgbDropdownModule,
    MatChipsModule,
    NgbPaginationModule,
    MatCheckboxModule
  ],
  exports: [CustomTableComponent]
})

export class CustomTableModule { }
