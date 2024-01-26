import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import User from '../models/user';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  // declare variable of type User
  userInfo!: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // initialize variable userInfo! to hold information of
    // selected user gotten by observable userInfo$
    this.userService.userInfo$.subscribe((user) => {
      this.userInfo = user;
    });
  }
}
