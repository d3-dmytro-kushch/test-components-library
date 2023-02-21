import { TestBed } from '@angular/core/testing';

import { Door3ComponentsExampleLibService } from './door3-components-example-lib.service';

describe('Door3ComponentsExampleLibService', () => {
  let service: Door3ComponentsExampleLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Door3ComponentsExampleLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
