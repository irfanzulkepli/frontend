import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SimplebarAngularModule } from 'simplebar-angular';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomTableModule } from 'src/app/components/custom-table/custom-table.module';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from "@fullcalendar/bootstrap";
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivitiesRoutingModule } from './activities-routing.modules';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    interactionPlugin,
    bootstrapPlugin
]);

@NgModule({
    declarations: [
        CalendarViewComponent,
        ActivityListComponent
    ],
    imports: [
        ActivitiesRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UIModule,
        NgbNavModule,
        CKEditorModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatFormFieldModule,
        SimplebarAngularModule,
        NgbDropdownModule,
        Ng2TelInputModule,
        NgbModalModule,
        NgxMatSelectSearchModule,
        MatSelectModule,
        Ng2SmartTableModule,
        NgbPaginationModule,
        NgbTypeaheadModule,
        CustomTableModule,
        FullCalendarModule
    ]
})
export class ActivitiesModule { }
