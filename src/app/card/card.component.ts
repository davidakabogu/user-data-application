import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../models/user';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  // get users from api and store in a variable users
  users: Observable<User[]> = this.userService.getUsers();
  constructor(private userService: UserService) {}
  // when clicked by enduser should retrive the user ID
  getUserInfo(id: number) {
    this.userService.getUserInfoAndEmit(id);
  }
}
