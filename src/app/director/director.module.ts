import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorListComponent } from './director-list/director-list.component';
import { DirectorDetailComponent } from './director-detail/director-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectorRoutingModule } from './director-routing.module';
import { DirectorCreateComponent } from './director-create/director-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DirectorRoutingModule,
    ReactiveFormsModule
  ],
  exports: [DirectorListComponent],
  declarations: [DirectorListComponent, DirectorDetailComponent, DirectorCreateComponent]
})
export class DirectorModule { }
