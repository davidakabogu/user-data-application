import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import User from '../models/user';
import { AsyncPipe, NgFor } from '@angular/common';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  imports: [CardComponent, AsyncPipe, NgFor, SearchComponent],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {}
  users!: User[];
  searchValue: string = '';

  getFilteredUsers() {
    return this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  trackUser(index: number, user: User): number {
    return user.id;
  }
}