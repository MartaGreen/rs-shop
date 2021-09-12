import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { detailsAction } from 'src/app/redux/actions/details.action';
import { detailsSelector } from 'src/app/redux/selectors/details.selector';

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
  constructor(private store: Store, private router: ActivatedRoute) {}

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

    // const activeMini: HTMLDivElement | null = document.querySelector('.activeMini');
    // activeMini?.classList.remove('activeMini');

    // const clickedMini: HTMLDivElement | null = (<HTMLElement>event.target).closest(
    //   '.image',
    // );
    // clickedMini?.classList.add('activeMini');
  }
}
