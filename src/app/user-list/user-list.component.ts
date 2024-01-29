import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [CardComponent]
})
export class UserListComponent {}
