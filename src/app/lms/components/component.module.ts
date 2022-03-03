import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { DealsModalComponent } from './deals-modal/deals-modal.component';
import { DeleteModal2Component } from './delete-modal2/delete-modal2.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ActivityModalComponent } from './activity-modal/activity-modal.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        ActivityModalComponent,
        DeleteModalComponent,
        DeleteModal2Component,
        DealsModalComponent
    ],
    imports: [
        CommonModule,
        NgbModalModule,
        FormsModule,
        ReactiveFormsModule,
        UIModule,
        MatSelectModule,
        NgxMatSelectSearchModule,
        MatChipsModule,
        MatIconModule
    ]
})
export class ComponentsModule { }
