import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  dataSource:string[]=[];
  constructor(private _http: HttpClient) { }
url:string="https://nodejsapidemo.herokuapp.com/users/";
  getAllUsers() {
    return this._http.get(this.url);
}
}
