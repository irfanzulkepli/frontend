import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { NgbDropdownModule, NgbModalModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SimplebarAngularModule } from 'simplebar-angular';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { DealsRoutingModule } from './deals-routing.module';
import { AllDealsComponent } from './all-deals/all-deals.component';
import { LostReasonsComponent } from './lost-reasons/lost-reasons.component';
import { PipelinesComponent } from './pipelines/pipelines.component';
import { PipelineViewComponent } from './pipeline-view/pipeline-view.component';
import { DealsCardComponent } from './deals-card/deals-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';
import { PipelineViewCardComponent } from './pipeline-view-card/pipeline-view-card.component';
import { ComponentsModule } from '../components/component.module';
import { CustomTableModule } from 'src/app/components/custom-table/custom-table.module';

const config: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 100,
};


@NgModule({
    declarations: [
        AllDealsComponent,
        DealsCardComponent,
        LostReasonsComponent,
        PipelinesComponent,
        PipelineViewComponent,
        ProfileModalComponent,
        PipelineViewCardComponent
    ],
    imports: [
        DealsRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UIModule,
        NgbNavModule,
        DropzoneModule,
        CKEditorModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatFormFieldModule,
        SimplebarAngularModule,
        NgbDropdownModule,
        Ng2TelInputModule,
        NgbModalModule,
        DragDropModule,
        MatSelectModule,
        NgxMatSelectSearchModule,
        ComponentsModule,
        CustomTableModule
    ],
    providers: [
        {
            provide: DROPZONE_CONFIG,
            useValue: config
        },
        DatePipe
    ]
})
export class DealsModule { }
