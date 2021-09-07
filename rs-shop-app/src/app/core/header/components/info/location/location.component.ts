import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent implements OnInit {
  locationPoint = this.locationService.getLocationFunc();

  constructor(private locationService: LocationService) {
    this.locationPoint.subscribe((city) => console.log('city', city));
  }

  ngOnInit(): void {}
}
