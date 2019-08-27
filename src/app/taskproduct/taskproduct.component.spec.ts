import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskproductComponent } from './taskproduct.component';

describe('TaskproductComponent', () => {
  let component: TaskproductComponent;
  let fixture: ComponentFixture<TaskproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
