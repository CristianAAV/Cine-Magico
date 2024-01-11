import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorCreateComponent } from './actor-create/actor-create.component';
import { ActorAssociationComponent } from './actor-association/actor-association.component';

const routes: Routes = [{
  path: 'actors',
  children: [
    {
      path: 'associate',
      component: ActorAssociationComponent
    },
    {
      path: 'create',
      component: ActorCreateComponent
    },
    {
      path: 'list',
      component: ActorListComponent
    },
    {
      path: ':id',
      component: ActorDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
