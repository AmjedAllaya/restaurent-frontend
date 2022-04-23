import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { ProductComponent } from './product/product.component';
import { EventComponent } from './event/event.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';
import { OfferComponent } from './menu/menu.component';

@NgModule({
  declarations: [ProductComponent, EventComponent, UserComponent, CategoryComponent, OrderComponent, OfferComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
