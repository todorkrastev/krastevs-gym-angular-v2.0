import { TestBed } from '@angular/core/testing';

import { KrastevsGymFormService } from './krastevs-gym-form.service';

describe('KrastevsGymFormService', () => {
  let service: KrastevsGymFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KrastevsGymFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
