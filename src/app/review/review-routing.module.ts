import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewCreateComponent } from './review-create/review-create.component';

const routes: Routes = [{
  path: 'reviews',
  children: [
    {
      path: 'create',
      component: ReviewCreateComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
