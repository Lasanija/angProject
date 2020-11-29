import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  homework=[{
    name: 'task1',
    done: false
  }, {
    name: 'task2',
    done: false
  }, {
    name: 'task3',
    done: false
  }, {
    name: 'task4',
    done: true
  }, {
    name: 'task5',
    done: true
  }];
}
