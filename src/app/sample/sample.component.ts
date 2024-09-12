import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css',
})
export class SampleComponent implements OnInit {
  public message: string = 'Hello, Angular!';
  public count: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.logMessage();
  }

  logMessage(): void {}

  incrementCount(): void {
    this.count++;
  }
}
