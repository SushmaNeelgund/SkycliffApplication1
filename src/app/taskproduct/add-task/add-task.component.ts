import { TaskdataService } from './../taskdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private data: TaskdataService ) { }

  ngOnInit() {
  }
  onTaskAdd(f) {

    this.data.AddTask(f.value).subscribe((data: any) => {
      alert("record added");
    });
  }


}
