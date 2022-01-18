import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-translate';

  /**
   *
   */
  constructor(public readonly translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');

    const defaultLang = 'fr';

    this.translate.use(defaultLang.match(/en|fr/) ? defaultLang : 'en');
  }
}
