import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getGoodsAction } from 'src/app/redux/actions/goods.page.action';
import { goodsSelector } from 'src/app/redux/selectors/goods-page.selector';
import { getColor } from 'src/app/shared/functions/colors';

@Component({
  selector: 'app-goods-page',
  templateUrl: './goods-page.component.html',
  styleUrls: ['./goods-page.component.scss'],
})
export class GoodsPageComponent implements OnInit {
  subCategory?: { categoryId: string; subCategoryId: string };
  goods$ = this.store.select(goodsSelector);
  getColor = getColor;

  constructor(private router: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: any) => {
      this.subCategory = params;
    });

    this.store.dispatch(
      getGoodsAction({
        path: `/${this.subCategory?.categoryId}/${this.subCategory?.subCategoryId}`,
      }),
    );
  }

  addToFavoriteFunc(event: Event, isFavorite: boolean) {
    if (isFavorite) {
      const elem: HTMLDivElement | null = (<HTMLElement>event.target).closest(
        '.favorite',
      );
      if (elem) {
        elem.classList.add('addedToFavorite');
      }
    }
  }
}
