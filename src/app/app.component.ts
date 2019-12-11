import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  events = [{title: 'Good Deeds'}, {description: 'Sample description'}];

  constructor(private api:ApiService) {
    this.getEvents();
  }
  getEvents = () => {
    this.api.getAllEvents().subscribe(
      data => {
        this.events = data;
      },
      error => {
        console.log(error)
      }
    )
  }
}
