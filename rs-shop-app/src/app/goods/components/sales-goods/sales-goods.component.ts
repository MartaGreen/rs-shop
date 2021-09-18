import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getGoodsForSaleAction } from 'src/app/redux/actions/goods.page.action';
import { saleGoodsSelector } from 'src/app/redux/selectors/sales.selector';

@Component({
  selector: 'app-sales-goods',
  templateUrl: './sales-goods.component.html',
  styleUrls: ['./sales-goods.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesGoodsComponent implements OnInit {
  salesGoods$ = this.store.select(saleGoodsSelector);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getGoodsForSaleAction());

    this.salesGoods$.subscribe((data) => console.log(data));
  }
}
