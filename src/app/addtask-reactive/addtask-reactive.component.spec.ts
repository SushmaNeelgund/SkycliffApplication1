import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaskReactiveComponent } from './addtask-reactive.component';

describe('AddtaskReactiveComponent', () => {
  let component: AddtaskReactiveComponent;
  let fixture: ComponentFixture<AddtaskReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtaskReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
