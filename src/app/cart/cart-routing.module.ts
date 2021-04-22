import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//whaaaaaat
import { CartPage } from './cart.page';

const routes: Routes = [
  {
    path: '',
    component: CartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartPageRoutingModule {}
