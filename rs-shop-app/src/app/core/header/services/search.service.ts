import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  clearCategories,
  getCategoriesAction,
} from 'src/app/redux/actions/get-categories.action';
import { categoriesSelector } from 'src/app/redux/selectors/get-categories.selector';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  categories$ = this.store.select(categoriesSelector);
  searchedStr: string = '';
  constructor(private http: HttpClient, private store: Store) {}

  sendGetCategoriesReq() {
    console.log('tech', this.searchedStr);
    return this.http.get(`http://localhost:3004/categories?q=${this.searchedStr}`);
  }

  getCategoriesFunc(searchedStr: string) {
    if (searchedStr.length >= 3) {
      this.searchedStr = searchedStr.split(' ').join('%20');
      this.store.dispatch(getCategoriesAction());
    }
    if (searchedStr.length === 0) {
      this.clearCategoriesFunc();
    }
    return this.categories$;
  }

  clearCategoriesFunc() {
    this.store.dispatch(clearCategories());
    console.log('dispatch');
    return this.categories$;
  }
}
