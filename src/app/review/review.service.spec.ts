/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReviewService } from './review.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Review', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReviewService]
    });
  });

  it('should ...', inject([ReviewService], (service: ReviewService) => {
    expect(service).toBeTruthy();
  }));
});
