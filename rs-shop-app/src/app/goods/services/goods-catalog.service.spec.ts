import { TestBed } from '@angular/core/testing';
import { GoodsCatalogService } from './goods.service';

describe('GoodsCatalogService', () => {
  let service: GoodsCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodsCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
