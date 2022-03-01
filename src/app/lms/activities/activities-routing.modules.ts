import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';


const routes: Routes = [
    { path: 'calendar-view', component: CalendarViewComponent },
    { path: 'activity-list', component: ActivityListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ActivitiesRoutingModule { }
