import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'linting-formatting-practice';

  constructor() {
    console.log('App component initialized');
  }

  ngOnInit() {
    let x = 10;
    if (x == 10) {
      console.log('x is 10');
    }
  }

  public doSomething(): void {
    const y = 20;
    console.log(y);
  }
}
