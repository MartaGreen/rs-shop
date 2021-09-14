import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { goodsSortAction } from 'src/app/redux/actions/goods.page.action';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortComponent implements OnInit, AfterViewInit {
  priceSortFlag: boolean = true; // true => от дешевого до дорогого; false => от дорогого до дешевого
  ratingSortFlag: boolean = true; // true => от высокого рейтинга до низкого; false => от низкого до высокогого
  subCategory?: { categoryId: string; subCategoryId: string };
  priceElem?: HTMLDivElement;
  ratingElem?: HTMLDivElement;

  constructor(
    private store: Store,
    private router: ActivatedRoute,
    private elRef: ElementRef,
  ) {}
  ngAfterViewInit(): void {
    this.priceElem = this.elRef.nativeElement.querySelector('.sort-by-price');
    this.ratingElem = this.elRef.nativeElement.querySelector('.sort-by-rating');
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: any) => {
      this.subCategory = params;
    });
  }

  sortFunc(type: string) {
    console.log('sort');
    this.store.dispatch(
      goodsSortAction({
        path: `/${this.subCategory?.categoryId}/${this.subCategory?.subCategoryId}`,
        sortType: type,
        flag: type === 'price' ? this.priceSortFlag : this.ratingSortFlag,
      }),
    );

    if (type === 'price') {
      this.priceSortFlag = !this.priceSortFlag;
      this.ratingSortFlag = true;
      this.priceElem?.classList.add('active');
      this.ratingElem?.classList.remove('active');
    } else {
      this.ratingSortFlag = !this.ratingSortFlag;
      this.priceSortFlag = true;
      this.priceElem?.classList.remove('active');
      this.ratingElem?.classList.add('active');
    }
  }
}
