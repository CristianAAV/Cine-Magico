/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActorService } from './actor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Actor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActorService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should ...', inject([ActorService], (service: ActorService) => {
    expect(service).toBeTruthy();
  }));
});
