import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdatarocksComponent } from './ngx-webdatarocks.component';

describe('NgxWebdatarocksComponent', () => {
  let component: WebdatarocksComponent;
  let fixture: ComponentFixture<WebdatarocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebdatarocksComponent]
    });
    fixture = TestBed.createComponent(WebdatarocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
