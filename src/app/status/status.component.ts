import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent {
  currentDate = new Date();
  useragent = navigator.userAgent;
  languages = navigator.language;
  cookie = navigator.cookieEnabled;
  
  max_t_p = navigator.maxTouchPoints;
  con = navigator.hardwareConcurrency;
}
