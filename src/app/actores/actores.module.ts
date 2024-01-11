import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActorCreateComponent } from './actor-create/actor-create.component';
import { ActorRoutingModule } from './actor-routing-module';
import { ActorAssociationComponent } from './actor-association/actor-association.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ActorRoutingModule
  ],
  declarations: [ActorListComponent,ActorDetailComponent,ActorCreateComponent, ActorAssociationComponent],
  exports:[ActorListComponent]
})
export class ActoresModule { }
