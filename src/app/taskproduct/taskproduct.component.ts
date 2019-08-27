import { TaskdataService } from './taskdata.service';
// import { routing } from './../app.routing';
import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { Router } from '@angular/router';


@Component({
  selector: 'app-taskproduct',
  templateUrl: './taskproduct.component.html',
  styleUrls: ['./taskproduct.component.css']
})
export class TaskproductComponent implements OnInit {
  arr1: Task[] = [];
  constructor(private data:TaskdataService,private _router:Router) { }

  ngOnInit() {
    this.data.getAllTask().subscribe(
      (data:Task[])=>{
        this.arr1=data;
      }
    );
  }

  onTaskDelete(item:Task){
    this.data.deleteTask(item.Id).subscribe(
      (data:any)=>{
        this.arr1.splice(this.arr1.indexOf(item),1);
        alert('deleted');
      }
    );
  }
  // onTaskEdit(item:Task){
  //   this._router.navigate(['/edittask',item.Id]);
  // }
  onTaskEdit(item:Task){
    this._router.navigate(['/edittask',item.Id]);
  }
  onTaskreactiveEdit(item:Task){
    this._router.navigate(['/edittaskreactive',item.Id]);
  }
}

