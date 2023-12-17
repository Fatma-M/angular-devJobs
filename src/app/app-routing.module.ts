import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddNewJobComponent } from './pages/add-new-job/add-new-job.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-new', component: AddNewJobComponent },
  { path: 'job-details/:id', component: JobDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
