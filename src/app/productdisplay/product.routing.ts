import { RouterModule, Routes } from '@angular/router';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { UserGuardService } from '../user-guard.service';
import { ProductdisplayComponent } from './productdisplay.component';

const arr : Routes=[

  {path:'',children:[
    {path:'',component:ProductdisplayComponent},
  {path:'addproduct', component:ProductaddComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent}

  ]}

];

export const productrouting=RouterModule.forChild(arr);
