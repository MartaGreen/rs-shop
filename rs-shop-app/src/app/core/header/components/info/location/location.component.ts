import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  locationPoint = this.locationService.getLocationFunc();

  constructor(private locationService: LocationService) {}
}
