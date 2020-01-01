import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { Event } from './../../event-class/event';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css'],
  providers: [ApiService]
})
export class CaseStudyComponent implements OnInit {

  events: Event;

  constructor(private api:ApiService) { 
    this.getEvents();
  }

  getEvents = () => {
    this.api.getAllEvents().subscribe(
      data => {
        this.events = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
