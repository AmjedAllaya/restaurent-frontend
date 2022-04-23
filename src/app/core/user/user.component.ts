import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/_models/user.model';
import { UserService } from 'src/app/_services/user/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  list: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadItems();
  }
  loadItems() {
    this.list = [
      { id: 1, email: 'rchannouf@mail.com', password: 'ENCRYPTED', role: 'ADMIN', username: 'rchannouf' },
      { id: 2, email: 'aalaya@mail.com', password: 'ENCRYPTED', role: 'USER', username: 'aalaya' },
      { id: 3, email: 'sbousorra@mail.com', password: 'ENCRYPTED', role: 'USER', username: 'sbousorra' },
      { id: 4, email: 'rgara@mail.com', password: 'ENCRYPTED', role: 'MODERATOR', username: 'rgara' },
      { id: 5, email: 'ebayoudhi@mail.com', password: 'ENCRYPTED', role: 'USER', username: 'ebayoudhi' },
      { id: 6, email: 'esassi@mail.com', password: 'ENCRYPTED', role: 'ADMIN', username: 'esassi' },
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
