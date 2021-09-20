import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getGoodsForSaleAction } from 'src/app/redux/actions/goods.page.action';
import { IGood } from 'src/app/redux/models/details.model';
import { saleGoodsSelector } from 'src/app/redux/selectors/sales.selector';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  saleGoods$?: Observable<IGood[]> = this.store.select(saleGoodsSelector);
  saleGoods?: IGood[];

  constructor(private store: Store, private elRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.store.dispatch(getGoodsForSaleAction());

    this.saleGoods$?.subscribe((data) => {
      console.log(data, '!!!!!!!!');
      if (data)
        this.saleGoods = data
          .slice()
          .sort(() => Math.random() - Math.random())
          .slice(0, 5);
      this.elRef.markForCheck();
    });
  }
}

// export class MainPageComponent implements OnInit {
//   saleGoods$?: Observable<IGood[]>
//   saleGoods?: IGood[];

//   constructor(private store: Store) {}

//   ngOnInit(): void {
//     setTimeout(() => this.store.dispatch(getGoodsForSaleAction()), 0)
//     setTimeout(() => this.saleGoods$ = this.store.select(tenSaleGoodsSelector), 0)
//   }
// }
