import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealComponent } from './deal/deal.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { ProposalComponent } from './proposal/proposal.component';

const routes: Routes = [
    { path: 'deal', component: DealComponent },
    { path: 'proposal', component: ProposalComponent },
    { path: 'pipeline', component: PipelineComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ReportsRoutingModule { }
