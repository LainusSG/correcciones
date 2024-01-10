import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { linksGuard } from './links.guard';

describe('linksGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => linksGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
