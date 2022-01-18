import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-translate-sample',
  templateUrl: './translate-sample.component.html',
  styleUrls: ['./translate-sample.component.scss']
})
export class TranslateSampleComponent implements OnInit {

  public textFromTs = '';

  constructor(private readonly translocoService: TranslocoService) { }

  ngOnInit(): void {
    this.translocoService.selectTranslate('TextFromTs').subscribe((value) => {
      this.textFromTs = value;
    })
  }

}
