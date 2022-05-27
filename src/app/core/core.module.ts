import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { ProductComponent } from './product/product.component';
import { EventComponent } from './event/event.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';
import { OfferComponent } from './offer/offer.component';
import { ManageCategoryComponent } from './category/manage-category/manage-category.component';
import { ManageEventComponent } from './event/manage-event/manage-event.component';
import { ManageOfferComponent } from './offer/manage-offer/manage-offer.component';
import { ManageProductComponent } from './product/manage-product/manage-product.component';
import { ManageOrderComponent } from './order/manage-order/manage-order.component';
import { ManageUserComponent } from './user/manage-user/manage-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,
    EventComponent,
    UserComponent,
    CategoryComponent,
    OrderComponent,
    OfferComponent,
    ManageCategoryComponent,
    ManageEventComponent,
    ManageOfferComponent,
    ManageProductComponent,
    ManageOrderComponent,
    ManageUserComponent,
  ],
  imports: [CommonModule, CoreRoutingModule,FormsModule,ReactiveFormsModule,],
})
export class CoreModule {}
