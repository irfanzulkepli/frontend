import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
    { path: 'proposal-list', component: ProposalListComponent },
    { path: 'templates', component: TemplatesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProposalsRoutingModule { }
