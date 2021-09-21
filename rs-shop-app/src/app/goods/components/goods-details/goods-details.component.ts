import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/auth/services/user.service';
import { detailsAction } from 'src/app/redux/actions/details.action';
import { addToCartAction } from 'src/app/redux/actions/user.action';
import { detailsSelector } from 'src/app/redux/selectors/details.selector';
import { warningToLoginOrRegister } from 'src/app/shared/functions/loggedIn';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsDetailsComponent implements OnInit {
  details: any;
  details$ = this.store.select(detailsSelector);
  params: any;
  constructor(
    private store: Store,
    private router: ActivatedRoute,
    private service: LoginService,
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((data) => (this.params = data));
    this.store.dispatch(detailsAction({ itemId: this.params.itemId }));

    this.details$.subscribe((data) => (this.details = data));
  }

  sliderMiniClick(event: Event, index: number) {
    const activeSlide: HTMLDivElement | null = document.querySelector('.active');
    activeSlide?.classList.remove('active');

    const sliderItem: Element | undefined = document
      .querySelector('#detailsSlider')
      ?.querySelectorAll('.carousel-item')[index];
    sliderItem?.classList.add('active');
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
