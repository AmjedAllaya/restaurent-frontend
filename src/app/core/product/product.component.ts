import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product/product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  list: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadItems();
  }
  loadItems() {
    this.list = [
      { id: 1, name: 'Burger', description: 'Burger food', price: 12 },
      { id: 1, name: 'Pizza', description: 'Burger food', price: 17 },
      { id: 1, name: 'Pasta', description: 'Burger food', price: 20 },
      { id: 1, name: 'Juice', description: 'Burger food', price: 7 },
      { id: 1, name: 'Salad', description: 'Burger food', price: 10 },
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
