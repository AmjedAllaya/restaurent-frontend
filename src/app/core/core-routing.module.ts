import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { EventComponent } from './event/event.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { OfferComponent } from './offer/offer.component';
import { ProductComponent } from './product/product.component';

import { ManageCategoryComponent } from './category/manage-category/manage-category.component';
import { ManageEventComponent } from './event/manage-event/manage-event.component';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { ManageOrderComponent } from './order/manage-order/manage-order.component';
import { ManageOfferComponent } from './offer/manage-offer/manage-offer.component';
import { ManageProductComponent } from './product/manage-product/manage-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'categories', component: CategoryComponent },
  { path: 'events', component: EventComponent },
  { path: 'users', component: UserComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'offers', component: OfferComponent },
  { path: 'products', component: ProductComponent },

  { path: 'categories/create', component: ManageCategoryComponent },
  { path: 'events/create', component: ManageEventComponent },
  { path: 'users/create', component: ManageUserComponent },
  { path: 'orders/create', component: ManageOrderComponent },
  { path: 'offers/create', component: ManageOfferComponent },
  { path: 'products/create', component: ManageProductComponent },

  { path: 'categories/edit/:id', component: ManageCategoryComponent },
  { path: 'events/edit/:id', component: ManageEventComponent },
  { path: 'users/edit/:id', component: ManageUserComponent },
  { path: 'orders/edit/:id', component: ManageOrderComponent },
  { path: 'offers/edit/:id', component: ManageOfferComponent },
  { path: 'products/edit/:id', component: ManageProductComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
