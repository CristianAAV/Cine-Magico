import { Component, OnInit, Input } from '@angular/core';
import { ActorDetail } from '../ActorDetail';
import { ActorService } from '../actor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  actorId!: string;

  @Input() actorDetail!:ActorDetail;

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService
    
  ) {}

  getActorDetail(): void {
    this.actorService.getActorDetail(this.actorId).subscribe((actorDetail) => {
      this.actorDetail = actorDetail;
    });
  }

  ngOnInit() {
    if (this.actorDetail === undefined) {
      this.actorId = this.route.snapshot.paramMap.get('id')!;
      if(this.actorId){
        this.getActorDetail();
      }
    }
  }

}
