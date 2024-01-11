import { Component, Input, OnInit } from '@angular/core';
import { DirectorDetail } from '../directorDetail';
import { DirectorService } from '../director.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-director-detail',
  templateUrl: './director-detail.component.html',
  styleUrls: ['./director-detail.component.css'],
})
export class DirectorDetailComponent implements OnInit {
  directorId!: string;
  @Input() directorDetail!: DirectorDetail;
  filledStar: string = '★';
  emptyStar: string = '☆';

  constructor(
    private directorService: DirectorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.directorDetail === undefined) {
      this.directorId = this.route.snapshot.paramMap.get('id')!;
      if(this.directorId){
        this.getDirectorDetail();
      }
    }
  }

  getDirectorDetail(): void {
    this.directorService.getDirectorDetail(this.directorId).subscribe((directorDetail) => {
      this.directorDetail = directorDetail;
    });
  }

  calculateStars(rating: number): string {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += this.filledStar;
    }
    for (let i = rating; i < 5; i++) {
      stars += this.emptyStar;
    }
    return stars;
  }
}
