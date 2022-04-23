import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/_models/user.model';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  list: IUser[] = [];

  constructor(private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

}
