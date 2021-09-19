import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/auth/services/user.service';
import { detailsAction } from 'src/app/redux/actions/details.action';
import { IGood } from 'src/app/redux/models/details.model';
import { detailsSelector } from 'src/app/redux/selectors/details.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  cartItems: string[] = this.service.getUsername().cart;
  cartItemsData?: IGood[] = [];
  cartItemsData$ = this.store.select(detailsSelector);

  constructor(private service: LoginService, private store: Store) {}

  ngOnInit(): void {
    console.log(this.service.getUsername());

    this.cartItems.forEach((item) =>
      this.store.dispatch(detailsAction({ itemId: item })),
    );

    // this.cartItemsData$.subscribe((data) => {
    //   console.log('data', data);
    //   this.cartItemsData?.push(data.detailsData);
    //   console.log('data', this.cartItemsData);
    // });
  }
}
