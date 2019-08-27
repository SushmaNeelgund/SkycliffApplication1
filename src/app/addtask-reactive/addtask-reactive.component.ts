import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserdataService } from '../userdisplay/userdata.service';
import { User } from '../userdisplay/user';
import { Task } from '../taskproduct/task';
import { TaskdataService } from '../taskproduct/taskdata.service';

@Component({
  selector: 'app-addtask-reactive',
  templateUrl: './addtask-reactive.component.html',
  styleUrls: ['./addtask-reactive.component.css']
})
export class AddtaskReactiveComponent implements OnInit {
  signup1: FormGroup;
  displayuser:User
  constructor(private fb: FormBuilder, private data: TaskdataService) {}

  ngOnInit() {
    this.signup1 = this.fb.group({
      id: new FormControl(null),
      title: new FormControl(null),
      status: new FormControl(null)
  });
}
onUserSave() {
  this. data
    .AddTask(
      new Task(
        this.signup1.value.id,
        this.signup1.value.title,
        this.signup1.value.status

      )
    )
    .subscribe((x: any) => {
      alert("record added");
    });
}
}
