import { FormsModule } from '@angular/forms';

import { UserdisplayComponent } from '../userdisplay/userdisplay.component';
import { EdituserComponent } from '../userdisplay/edituser/edituser.component';
import { SignupComponent } from '../userdisplay/signup/signup.component';

import { NgModule } from '@angular/core';
import { userrouting } from './user.routing';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserdisplayComponent,EdituserComponent,SignupComponent ],

    imports:[

    CommonModule,
    FormsModule,
    userrouting
    ]
  })
  export class UserModule { }
