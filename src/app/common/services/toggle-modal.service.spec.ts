import { TestBed, inject } from '@angular/core/testing';

import { ToggleModalService } from './toggle-modal.service';

describe('ToggleModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleModalService]
    });
  });

  it('should be created', inject([ToggleModalService], (service: ToggleModalService) => {
    expect(service).toBeTruthy();
  }));
});
