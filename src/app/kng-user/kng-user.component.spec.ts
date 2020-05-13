import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KngUserComponent } from './kng-user.component';

describe('KngUserComponent', () => {
  let component: KngUserComponent;
  let fixture: ComponentFixture<KngUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KngUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KngUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
