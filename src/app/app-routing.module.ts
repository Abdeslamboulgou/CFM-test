import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { AddressDashboardComponent } from './address-dashboard/address-dashboard.component'

const routes: Routes = [
  {path:'', redirectTo: 'contacts', pathMatch:'full'},
  {path:'contacts', component: DashboardComponent},
  {path: 'addcontact', component: SubmitFormComponent},
  {path: 'view', component: AddressDashboardComponent},
  {path: 'edit', component: UpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
