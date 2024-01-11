import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewRoutingModule } from './review-routing.module';
import { ReviewCreateComponent } from './review-create/review-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReviewRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReviewCreateComponent]
})
export class ReviewModule { }
