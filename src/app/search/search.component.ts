import {
  Component,
  EventEmitter,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  enteredSearchValue: string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChange.emit(this.enteredSearchValue);
  }
}
