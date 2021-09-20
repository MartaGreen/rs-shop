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

  advantages?: { advantage: { title: string; text: string }; img: string }[] = [
    {
      advantage: {
        title: 'Гарантия качества',
        text: 'Мы продаем только сертифицированный товар с гарантией сервисных центров, чек прилагается. ',
      },
      img: 'https://e7.pngegg.com/pngimages/395/958/png-clipart-computer-icons-symbol-business-service-project-symbol-miscellaneous-text.png',
    },
    {
      advantage: {
        title: 'Честные цены',
        text: 'Все цены, указанные на сайте, действительны и актуальны — данные обновляются автоматически.',
      },
      img: 'https://e7.pngegg.com/pngimages/273/238/png-clipart-computer-icons-money-wallet-miscellaneous-angle.png',
    },
    {
      advantage: {
        title: 'Доставка по России',
        text: 'Мы доставляем заказыв разные города России',
      },
      img: 'https://img2.freepng.ru/20180423/cuq/kisspng-computer-icons-flat-design-country-capital-the-ico-lorem-ipsum-5addf2a7366362.9374471615244950152228.jpg',
    },
    {
      advantage: {
        title: 'Кредит *не выходя из дома*',
        text: 'Вы можете выбрать кредит среди предложений ведущих банков, рассчитать и оформить его, не выходя из дома.',
      },
      img: 'https://e7.pngegg.com/pngimages/700/655/png-clipart-money-financial-services-loan-financial-transaction-dollar-icon-text-orange.png',
    },
    {
      advantage: {
        title: 'Надежный сервис',
        text: 'Мы предлагаем услуги по сборке, установке, настройке, гарантийному и послегарантийному обслуживанию товаров.',
      },
      img: 'https://e7.pngegg.com/pngimages/818/171/png-clipart-customer-service-business-consultant-computer-icons-business-angle-white.png',
    },
    {
      advantage: {
        title: 'Выгодные покупки',
        text: 'Наш онлайн-гипермаркет предлагает вам выгодные акции, скидки и собственную бонусную программу.',
      },
      img: 'https://w7.pngwing.com/pngs/287/1011/png-transparent-computer-icons-business-double-benefits-text-service-logo.png',
    },
  ];
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
