import { TestBed } from '@angular/core/testing';

import { WebdatarocksPivotService } from './ngx-webdatarocks.service';

describe('NgxWebdatarocksService', () => {
  let service: WebdatarocksPivotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebdatarocksPivotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
