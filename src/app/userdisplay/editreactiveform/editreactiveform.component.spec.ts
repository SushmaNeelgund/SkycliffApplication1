import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreactiveformComponent } from './editreactiveform.component';

describe('EditreactiveformComponent', () => {
  let component: EditreactiveformComponent;
  let fixture: ComponentFixture<EditreactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditreactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
