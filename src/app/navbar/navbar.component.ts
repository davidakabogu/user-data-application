import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // create array of paths to be displayed in nav bar component.
  links: any = [
    { path: 'home', label: 'Home' },
    { path: 'users', label: 'Users' },
    // add more as necessary
  ];
}
