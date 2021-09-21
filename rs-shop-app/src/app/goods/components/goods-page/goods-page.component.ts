import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/auth/services/user.service';
import { getGoodsAction } from 'src/app/redux/actions/goods.page.action';
import { addToCartAction } from 'src/app/redux/actions/user.action';
import { goodsSelector } from 'src/app/redux/selectors/goods-page.selector';
import { getCartItemSelector } from 'src/app/redux/selectors/user.selector';
import { getColor } from 'src/app/shared/functions/colors';
import { warningToLoginOrRegister } from 'src/app/shared/functions/loggedIn';

@Component({
  selector: 'app-goods-page',
  templateUrl: './goods-page.component.html',
  styleUrls: ['./goods-page.component.scss'],
})
export class GoodsPageComponent implements OnInit {
  subCategory?: { categoryId: string; subCategoryId: string };
  goods$ = this.store.select(goodsSelector);
  getColor = getColor;

  cartItems$ = this.store.select(getCartItemSelector);

  constructor(
    private router: ActivatedRoute,
    private store: Store,
    private service: LoginService,
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: any) => {
      this.subCategory = params;
    });

    this.store.dispatch(
      getGoodsAction({
        path: `/${this.subCategory?.categoryId}/${this.subCategory?.subCategoryId}`,
      }),
    );

    this.cartItems$.subscribe((data) => console.log('your data is', data));
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

  findInCartList(itemId: string) {
    if (this.service.getUsername()) {
      const items = this.service.getUsername().cart;
      const flag = items.find((item: string) => item === itemId);
      return flag ? true : false;
    } else {
      return false;
    }
  }

  addToCartFunc(id: string, btn: HTMLButtonElement) {
    if (this.service.getUsername()) {
      this.store.dispatch(addToCartAction({ id: id }));
      this.service.addUserCartItem(id);
      btn.classList.add('addedToCart');
    } else {
      warningToLoginOrRegister();
    }
  }
}
