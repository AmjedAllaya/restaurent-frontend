import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/_models/order.model';
import { OrderService } from 'src/app/_services/order/order.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  list: IOrder[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadItems();
  }
  loadItems() {
    this.list = [
      { id: 1, type: 'Pizza', date: '28/11/2022', status: 'DELIVERED' },
      { id: 1, type: 'Burger', date: '28/11/2022', status: 'PENDING' },
      { id: 1, type: 'Pasta', date: '28/11/2022', status: 'IN PROGRESS' },
      { id: 1, type: 'Salad', date: '28/11/2022', status: 'DECLINED' },
    ];
  }

    deleteItem(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
      }
    });
  }
  editItem(id: number) {}
}
