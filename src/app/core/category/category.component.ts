import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/_models/category.model';
import { CategoryService } from 'src/app/_services/category/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  list: ICategory[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.list = [
      { id: 1, name: 'Burger', description: 'The burger food category' },
      { id: 2, name: 'Chicken', description: 'The chicken food category' },
      { id: 3, name: 'Pizza', description: 'The pizza food category' },
      { id: 4, name: 'Drinks', description: 'The drinks food category' },
      { id: 5, name: 'Dessert', description: 'The dessert food category' },
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
