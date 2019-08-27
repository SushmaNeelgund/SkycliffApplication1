import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TaskdataService } from './taskproduct/taskdata.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskResolverService {

  constructor(private data:TaskdataService) { }

  resolve(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>
  {
          return this.data.getAllTask().pipe(
        map(x => ({ data: x,errorMessage:'' })),
        catchError(err=>{
          console.log(err);
          return of({ product: null,errorMessage:err.message });
        })
      );


  }
}




