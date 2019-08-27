import { TaskdataService } from './../taskdata.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from './../task';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  id:string='';
  title:string='';
  status:string='';

  constructor(private _act:ActivatedRoute,private data:TaskdataService) { }

  ngOnInit() {
    this.id=this._act.snapshot.params["Id"];
    this.data.getUserById(this.id).subscribe(
      (data:Task[])=>{
        this.id=data[0].Id;
        this.title=data[0].Title;
        this.status=data[0].Status;
      }
    );
  }

  onTaskSave(f){
    this.data.editTask(f.value).subscribe(
      (data:any)=>{
        alert('update');
      }
    );
  }

}


