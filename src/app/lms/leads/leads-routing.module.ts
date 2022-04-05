import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealDetailsComponent } from './deal/deal-details/deal-details.component';
import { LeadGroupComponent } from './lead-group/lead-group.component';
import { LeadProfileComponent } from './lead-profile/lead-profile.component';
import { OrganizationComponent } from './organization/organization.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
    { path: 'people', component: PeopleComponent },
    { path: 'organization', component: OrganizationComponent },
    { path: 'lead-group', component: LeadGroupComponent },
    { path: 'people/:id', component: LeadProfileComponent },
    { path: 'organization/:id', component: LeadProfileComponent },
    { path: 'deal/:id', component: LeadProfileComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LeadsRoutingModule { }
