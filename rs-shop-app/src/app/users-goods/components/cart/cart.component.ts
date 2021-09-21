import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { LoginService } from 'src/app/auth/services/user.service';
import { GoodsService } from 'src/app/goods/services/goods.service';
import { IGood } from 'src/app/redux/models/details.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  cartItems: string[] = this.service.getUsername().cart;
  cartItemsData?: IGood[] = [];
  count?: number = 1;

  constructor(
    private service: LoginService,
    private goodsServie: GoodsService,
    private elRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    console.log(this.service.getUsername());

    this.cartItems.forEach((itemId) => {
      this.goodsServie.sendGetGoodItem(itemId).subscribe((itemData) => {
        this.cartItemsData?.push(itemData);
        this.elRef.markForCheck();
      });
    });

    console.log('cartItemsData', this.cartItemsData);
    // this.cartItemsData$.subscribe((data) => {
    //   console.log('data', data);
    //   this.cartItemsData?.push(data.detailsData);
    //   console.log('data', this.cartItemsData);
    // });
  }

  addGood(elem: HTMLInputElement) {
    this.count! += 1;
    if (this.count) elem.value = this.count.toString();
  }

  rmGood(elem: HTMLInputElement) {
    if (this.count! - 1 > 0) {
      this.count! -= 1;
      if (this.count) elem.value = this.count.toString();
    }
  }

  getTotalPrice(amount: string, price: number | undefined) {
    return Number(amount) * price!;
  }
}
