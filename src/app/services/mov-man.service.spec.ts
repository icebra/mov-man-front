/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovManService } from './mov-man.service';

describe('Service: News', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovManService]
    });
  });

  it('should ...', inject([MovManService], (service: MovManService) => {
    expect(service).toBeTruthy();
  }));
});
