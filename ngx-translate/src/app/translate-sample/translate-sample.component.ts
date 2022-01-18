import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate-sample',
  templateUrl: './translate-sample.component.html',
  styleUrls: ['./translate-sample.component.scss']
})
export class TranslateSampleComponent implements OnInit {
  public param = {value: 'John Doe'};

  public textFromTs = '';

  constructor(private readonly translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.get('TextFromTs').subscribe((value) => {
      this.textFromTs = value;
    });
  }

}
