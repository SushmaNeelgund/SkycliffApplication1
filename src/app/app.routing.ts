import { EdittaskComponent } from './taskproduct/edittask/edittask.component';
import { Routes,RouterModule, PreloadAllModules } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TaskproductComponent } from './taskproduct/taskproduct.component';
import { AddTaskComponent } from './taskproduct/add-task/add-task.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EditreactiveformComponent } from './userdisplay/editreactiveform/editreactiveform.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { AddtaskReactiveComponent } from './addtask-reactive/addtask-reactive.component';
import { UserResolverService } from './user-resolver.service';
import { UsersComponent } from './users/users.component';
import { ProductResolverService } from './product-resolver.service';
import { Product1Component } from './product1/product1.component';
import { TaskResolverService } from './task-resolver.service';
import { Task1Component } from './task1/task1.component';
import { EdittaskreactiveComponent } from './taskproduct/edittaskreactive/edittaskreactive.component';
import { HomeComponent } from './home/home.component';

//import { UserGuardService } from './user-guard.service';
const arr : Routes=[
  {path:'',component:HomeComponent},
  {  path:'product',data:{preload:true},  loadChildren:'./productdisplay/product.module#ProductModule'},

 //{  path:'user11',loadChildren:'./users/user.module#UserModule'},

  {path:'product1',resolve:{pdata:ProductResolverService},component:Product1Component},
  {path:'user1',resolve:{uData:UserResolverService},component:UsersComponent},
  {path:'task1',resolve:{tData:TaskResolverService},component:Task1Component},
  {path:'customer',component:CustomerComponent},
  {path:'addtask',component:AddTaskComponent},
  {path:'tasks',component:TaskproductComponent},
  {path:'demo',component:DemoComponent},
  {path:'demo1/:id',component:Demo1Component},
  {path:'demo2',component:Demo2Component},
  {path:'login',component:LoginComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'edittaskreactive/:id',component:EdittaskreactiveComponent},
  {path:'edituserreactive/:user_email',component:EditreactiveformComponent},
  {path:'reactsignup',component:SignupReactiveDemoComponent},
  {path:'reacttask',component:AddtaskReactiveComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr,{preloadingStrategy:PreloadAllModules});
