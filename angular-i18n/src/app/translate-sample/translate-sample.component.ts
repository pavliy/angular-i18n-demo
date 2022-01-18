import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate-sample',
  templateUrl: './translate-sample.component.html',
  styleUrls: ['./translate-sample.component.scss']
})
export class TranslateSampleComponent implements OnInit {

  public readonly userName = "John Doe";

  public readonly textFromTs = $localize`translateFromTs`;

  constructor() { }

  ngOnInit(): void {
  }

}
