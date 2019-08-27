import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { userResolved } from './userdisplay/user';
import { UserdataService } from './userdisplay/userdata.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<userResolved>{

  constructor(private _userdata:UserdataService) {}
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
    return this._userdata.getAllUsers().pipe(
      map(x=>({users:x,Errormsg:''})),
      catchError(err=>{
        return of({users:null,Errormsg:"something went wrong"})
      })
    )
  }
}
