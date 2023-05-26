import { Component } from '@angular/core';

@Component({
  selector: 'app-ngbt-showcase',
  templateUrl: './ngbt-showcase.component.html',
  styleUrls: ['./ngbt-showcase.component.scss']
})
export class NgbtShowcaseComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
