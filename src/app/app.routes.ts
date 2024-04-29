import { Routes } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { AddProductComponent } from './products/add-product/add-product.component';

export const routes: Routes = [
    {
        path:'',
        component:ProductComponent
    },
    {
        path:'product',
        component:ProductComponent
    },
    {
        path:'product/add',
        component:AddProductComponent
    }
];
