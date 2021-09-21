import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/auth/services/user.service';
import { getGoodsForSaleAction } from 'src/app/redux/actions/goods.page.action';
import { addToCartAction } from 'src/app/redux/actions/user.action';
import { saleGoodsSelector } from 'src/app/redux/selectors/sales.selector';

@Component({
  selector: 'app-sales-goods',
  templateUrl: './sales-goods.component.html',
  styleUrls: ['./sales-goods.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesGoodsComponent implements OnInit {
  salesGoods$ = this.store.select(saleGoodsSelector);

  constructor(private store: Store, private service: LoginService) {}

  ngOnInit(): void {
    this.store.dispatch(getGoodsForSaleAction());

    this.salesGoods$.subscribe((data) => console.log(data));
  }

  findInCartList(itemId: string) {
    const items = this.service.getUsername().cart;
    const flag = items.find((item: string) => item === itemId);
    return flag ? true : false;
  }

  addToCartFunc(id: string, btn: HTMLButtonElement) {
    this.store.dispatch(addToCartAction({ id: id }));
    this.service.addUserCartItem(id);
    btn.classList.add('addedToCart');
  }
}
