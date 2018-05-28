import { TestBed, inject } from '@angular/core/testing';

import { AfterLoginActionsService } from './after-login-actions.service';

describe('AfterLoginActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfterLoginActionsService]
    });
  });

  it('should be created', inject([AfterLoginActionsService], (service: AfterLoginActionsService) => {
    expect(service).toBeTruthy();
  }));
});
