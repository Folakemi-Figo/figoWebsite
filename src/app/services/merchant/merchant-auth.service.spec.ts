import { TestBed } from '@angular/core/testing';

import { MerchantAuthService } from './merchant-auth.service';

describe('MerchantAuthService', () => {
  let service: MerchantAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
