import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { TaskproductComponent } from './taskproduct/taskproduct.component';
import { EdittaskComponent } from './taskproduct/edittask/edittask.component';
import { AddTaskComponent } from './taskproduct/add-task/add-task.component';
import { CustomerComponent } from './customer/customer.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EditreactiveformComponent } from './userdisplay/editreactiveform/editreactiveform.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Interceptordemo } from './interceptordemo';
import { AddtaskReactiveComponent } from './addtask-reactive/addtask-reactive.component';
import { UsersComponent } from './users/users.component';

import { Product1Component } from './product1/product1.component';
// import { ProductModule } from './productdisplay/product.module';
import { UserModule } from './users/user.module';
import { AppProductPreloader } from './appProductPreloader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainTableComponent } from './main-table/main-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { Task1Component } from './task1/task1.component';
import { EdittaskreactiveComponent } from './taskproduct/edittaskreactive/edittaskreactive.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagenotfoundComponent,
    TaskproductComponent,
    EdittaskComponent,
    AddTaskComponent,
    CustomerComponent,
    SignupReactiveDemoComponent,
    EditreactiveformComponent,
    LoginComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    AddtaskReactiveComponent,
    UsersComponent,
    Product1Component,
    MainTableComponent,
    Task1Component,
    EdittaskreactiveComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    // ProductModule,
    UserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true},
    AppProductPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
