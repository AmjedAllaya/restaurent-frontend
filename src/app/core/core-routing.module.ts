import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { EventComponent } from './event/event.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { OfferComponent } from './offer/offer.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'categories', component: CategoryComponent },
  { path: 'events', component: EventComponent },
  { path: 'users', component: UserComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'offers', component: OfferComponent },
  { path: 'products', component: ProductComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
