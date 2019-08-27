import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MainTableDataSource, MainTableItem } from './main-table-datasource';
import { User } from '../userdisplay/user';
import { HttpClient } from '@angular/common/http';
import { TableService } from '../table.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements   OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<MainTableItem>;
  //dataSource: User[]=[];
  dataSource: MatTableDataSource<User>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['user_email', 'user_name','user_password','user_mobile_no'];
  constructor(private _http: HttpClient, private _data:TableService) {}

  ngOnInit() {
    this._data.getAllUsers().subscribe(
      (data:User[])=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;

      }
    );
  }

   applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();


    // }


  //ngAfterViewInit() {
   // this.dataSource.sort = this.sort;
     //this.dataSource.paginator = this.paginator;
     //this.table.dataSource = this.dataSource;
   //}

  //}
  }
}
