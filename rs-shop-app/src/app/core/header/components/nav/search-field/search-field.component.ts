import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ISearchedCategories } from 'src/app/core/header/models/searched-data.model';
import { categoriesSelector } from 'src/app/redux/selectors/get-categories.selector';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  searchedData$ = this.store.select(categoriesSelector);
  showSearchedResults: boolean = true;
  searchedData: ISearchedCategories = {} as ISearchedCategories;
  constructor(
    private elRef: ElementRef,
    private service: SearchService,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log(this.searchedData$);
    const search: HTMLInputElement =
      this.elRef.nativeElement.querySelector('.search-input');

    if (search) {
      const stream = fromEvent(search, 'input').pipe(
        map((e: any) => e.target.value),
        debounceTime(300),
        distinctUntilChanged(),
      );

      stream.subscribe((value) => {
        this.service.getCategoriesFunc(value);
      });
    }

    this.searchedData$.subscribe((categories) => {
      this.searchedData.categories = categories;
    });
  }

  onBlurEvent() {
    this.showSearchedResults = false;
  }
  onFocusEvent() {
    this.router.navigate(['/']);
    this.showSearchedResults = true;
  }
}
