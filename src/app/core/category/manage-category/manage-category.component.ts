import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    Swal.fire({
      icon: 'success',
      title: 'Your item has been created successfully',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.router.navigate(['/categories']);
    });
  }

}
