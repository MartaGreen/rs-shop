import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllCategories } from 'src/app/redux/actions/goods-catalog.action';
import { ICategory } from 'src/app/redux/models/goods-catalog.model';
import { allCategoriesSelector } from 'src/app/redux/selectors/goods-catalog.selector';
import { GoodsCatalogService } from '../../services/goods-catalog.service';

@Component({
  selector: 'app-goods-catalog',
  templateUrl: './goods-catalog.component.html',
  styleUrls: ['./goods-catalog.component.scss'],
})
export class GoodsCatalogComponent implements OnInit {
  searchedData$ = this.store.select(allCategoriesSelector);
  chosenCategoryData: ICategory = {} as ICategory;
  searchedData: any;
  lastChosenElem?: HTMLDivElement;

  constructor(private store: Store, private service: GoodsCatalogService) {}

  ngOnInit(): void {
    this.store.dispatch(getAllCategories());
    console.log('start');
    this.searchedData$.subscribe((data) => {
      this.searchedData = data;
    });
  }

  onCategoryItemFocus(event: any) {
    if (this.lastChosenElem) {
      this.lastChosenElem.classList.remove('chosenCategory');
    }

    this.chosenCategoryData = this.searchedData.find(
      (elem: ICategory) => elem.name === event.target.innerText,
    );
    event.target.classList.add('chosenCategory');

    this.lastChosenElem = event.target;
  }
}
