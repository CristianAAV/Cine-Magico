import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { ActorDetail } from '../ActorDetail';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actores: Array<ActorDetail> = [];
  selected: boolean = false;
  selectedActor!: ActorDetail;

  
  constructor(
    private actorService: ActorService,
    private router: Router
    ) {}

  ngOnInit() {
    this.getActors();
  }

    getActors(): void {
      this.actorService.getActors().subscribe((actores) => {
        this.actores = actores;
      });
    }  

    onSelected(actor: ActorDetail): void {
      this.selected = true;
      this.selectedActor = actor;
      this.router.navigate(['/actors', actor.id]);
    }



  

}
