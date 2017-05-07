import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodapiComponent } from './nodapi.component';

describe('NodapiComponent', () => {
  let component: NodapiComponent;
  let fixture: ComponentFixture<NodapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
