import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category, ICategory } from 'src/app/_models/category.model';
import { CategoryService } from 'src/app/_services/category/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  /* list: ICategory[] = [];  */
  list: ICategory[] = [];
  updateList:ICategory[] = [];
  categoryForm: FormGroup;
  constructor(private categoryService: CategoryService,private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loadItems();
    this.categoryForm = this.formBuilder.group({
      nom: [''],
      description: [''],
    });

  }

  loadItems() {
  /*    this.categoryService.getCategories().subscribe(data=>{
      this.list=data;
    });  */ 
      this.list = [
      { id: 1, nom: 'Burger', description: 'The burger food category' },
      { id: 2, nom: 'Chicken', description: 'The chicken food category' },
      { id: 3, nom: 'Pizza', description: 'The pizza food category' },
      { id: 4, nom: 'Drinks', description: 'The drinks food category' },
      { id: 5, nom: 'Dessert', description: 'The dessert food category' },
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
        this.categoryService.deleteCategory(id).subscribe(
          data => {
            Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
          },
          error => {
            Swal.fire('ERROR!', 'Your item has been not deleted.', 'error');
          }
        )
      }
    });
  }

  editItem(id: number,) {
    this.categoryService.updateCategory(id,this.categoryForm.value).subscribe(
      data =>{

    })
  }
}
