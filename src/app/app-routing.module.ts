import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseListComponent } from './pages/case-list/case-list.component';
import { CaseDetailsComponent } from './pages/case-details/case-details.component';


const routes: Routes = [
  { path: '', component: CaseListComponent },
  { path: 'caselist', component: CaseListComponent },
  { path: 'casedetails/:caseid', component: CaseDetailsComponent },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
