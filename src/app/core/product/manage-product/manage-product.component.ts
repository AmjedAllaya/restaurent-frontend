import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

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
      this.router.navigate(['/products']);
    });
  }
}
