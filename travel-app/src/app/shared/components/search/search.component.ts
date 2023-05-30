import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searchTerm = new EventEmitter<string>();

  public search: FormControl = new FormControl('', { updateOn: 'blur' });

  constructor() {}

  ngOnInit(): void {}

  onSearch() {
    const term = this.search.value.trim();
    this.searchTerm.emit(term);
  }
}
