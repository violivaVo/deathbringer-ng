import { TestBed } from '@angular/core/testing';

import { SessionHolderService } from './session-holder.service';

describe('SessionHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionHolderService = TestBed.get(SessionHolderService);
    expect(service).toBeTruthy();
  });
});
