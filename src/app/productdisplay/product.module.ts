import { ProductdisplayComponent } from './productdisplay.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { routing } from '../app.routing';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productrouting } from './product.routing';
import { SidebarComponent } from '../sidebar/sidebar.component';

@NgModule({
  declarations: [
    ProductdisplayComponent,ProductaddComponent,EditproductComponent,
    SidebarComponent,],

    imports: [CommonModule, FormsModule, productrouting]

  })
  export class ProductModule { }
