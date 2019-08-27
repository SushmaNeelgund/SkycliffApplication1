import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, taskResolved } from '../taskproduct/task';
import { TaskdataService } from '../taskproduct/taskdata.service';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
    taskArr:Task[]=[];
    taskData:taskResolved;
    errorMessage:String='';
    constructor(private data:TaskdataService,private _actroute:ActivatedRoute) {

     this.taskData= this._actroute.snapshot.data["tData"];
    }

    ngOnInit() {
        this.taskArr=this.taskData.data;
        this.errorMessage=this.taskData.errormessage;
    }

  }
