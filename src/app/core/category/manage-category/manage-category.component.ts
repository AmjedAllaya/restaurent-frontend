import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from 'src/app/_services/category/category.service';
import { Category } from 'src/app/_models/category.model';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private router: Router, private categoryService: CategoryService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      nom: [''],
      description: [''],
    })
  }
  submit() {
    this.categoryService.addCategory(this.categoryForm.value).subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'Your item has been created successfully',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/categories']);
        });
      },
      error => {
        Swal.fire("ERROR","ERREUR Lors de l'ajout", "error");

      }
    )

  }

}
