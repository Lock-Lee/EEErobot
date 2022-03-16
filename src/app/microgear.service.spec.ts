import { TestBed } from '@angular/core/testing';

import { MicrogearService } from './microgear.service';

describe('MicrogearService', () => {
  let service: MicrogearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrogearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
