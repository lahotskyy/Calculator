import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleModeComponent } from './simple-mode.component';

describe('SimpleModeComponent', () => {
  let component: SimpleModeComponent;
  let fixture: ComponentFixture<SimpleModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
