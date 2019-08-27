import { Routes, RouterModule } from '@angular/router';
import { UserdisplayComponent } from '../userdisplay/userdisplay.component';
import { SignupComponent } from '../userdisplay/signup/signup.component';
import { EdituserComponent } from '../userdisplay/edituser/edituser.component';

const arr : Routes=[
//{path:'', children:[
{path:'users',component:UserdisplayComponent},
{path:'signup',component:SignupComponent},
{path:'edituser/:user_email',component:EdituserComponent}
//]}
];

export const userrouting=RouterModule.forChild(arr);
