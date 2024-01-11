import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../director.service';
import { DirectorDetail } from '../directorDetail';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-director-list',
  templateUrl: './director-list.component.html',
  styleUrls: ['./director-list.component.css'],
})
export class DirectorListComponent implements OnInit {
  directors: Array<DirectorDetail> = [];

  selected: boolean = false;
  selectedDirector!: DirectorDetail;
  selectedFilter: string = '';
  directorSearch: string = '';
  constructor(
    private directorService: DirectorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDirectors();
  }

  getDirectors(): void {
    this.directorService.getDirectors().subscribe((directors) => {
      this.directors = directors;
    });
  }

  onSelected(director: DirectorDetail): void {
    this.selected = true;
    this.selectedDirector = director;
    this.router.navigate(['/directors', director.id]);
  }

  onFiltered(filter: string): void {
    this.selectedFilter = filter;
    this.orderDirectors(filter);
  }

  orderDirectors(option: string): void {
    if (option === 'option1') {
      this.directors.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.directors.sort((a, b) => a.nationality.localeCompare(b.nationality));
    }
  }
  onSearchDirector(): void {
    if (this.directorSearch) {
      this.directorService
        .getDirectors()
        .pipe(
          map((directors) =>
            directors.filter((director) =>
              director.name
                .toLowerCase()
                .includes(this.directorSearch.toLowerCase())
            )
          )
        )
        .subscribe((directors) => (this.directors = directors));
    } else {
      this.getDirectors();
    }
  }
}
