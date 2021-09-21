import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeComponent {
  constructor() {}
}
