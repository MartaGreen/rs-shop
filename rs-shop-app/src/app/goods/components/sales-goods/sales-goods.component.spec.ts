import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesGoodsComponent } from './sales-goods.component';

describe('SalesGoodsComponent', () => {
  let component: SalesGoodsComponent;
  let fixture: ComponentFixture<SalesGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesGoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
