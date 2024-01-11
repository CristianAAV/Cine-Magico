/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Movies', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));
});
