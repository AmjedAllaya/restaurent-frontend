import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/_models/order.model';
import { OrderService } from 'src/app/_services/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  list: IOrder[] = [];

  constructor(private orderService: OrderService,
  ) { }

  ngOnInit(): void {
  }

}
