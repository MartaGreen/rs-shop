import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  clearAllCategoriesAction,
  getAllCategories,
} from 'src/app/redux/actions/goods-catalog.action';
import { getGoodsAction } from 'src/app/redux/actions/goods.page.action';
import { allCategoriesSelector } from 'src/app/redux/selectors/goods-catalog.selector';

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesNavComponent implements OnInit {
  searchedData$ = this.store.select(allCategoriesSelector);

  constructor(
    private store: Store,
    private activeRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.searchedData$.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(clearAllCategoriesAction());
    this.store.dispatch(getAllCategories());
  }

  goToCategory(path: string, categoryId: string, subCategoryId: string) {
    this.store.dispatch(
      getGoodsAction({
        path: `/${categoryId}/${subCategoryId}`,
      }),
    );
  }
}
