import { Component, OnInit } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { SampleComponent } from './sample/sample.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [UserListComponent, SampleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'linting-formatting-practice';

  constructor() {
    // Console.log removed
  }

  ngOnInit() {
    const x = 10;
    if (x === 10) {
      // Console.log removed
    }
  }

  public doSomething(): void {
    // Removed unused variable 'y'
  }
}
