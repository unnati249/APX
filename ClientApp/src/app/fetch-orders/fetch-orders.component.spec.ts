import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchOrdersComponent } from './fetch-orders.component';

describe('FetchOrdersComponent', () => {
  let component: FetchOrdersComponent;
  let fixture: ComponentFixture<FetchOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
