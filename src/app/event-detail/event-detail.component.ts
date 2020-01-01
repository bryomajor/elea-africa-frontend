import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [ApiService]
})
export class EventDetailComponent implements OnInit {

  event: any;

  constructor(private route: ActivatedRoute, private api: ApiService) { 
    this.getEvent()
  }
  

  ngOnInit() {
  }

  private getEvent() {
    this.api.getEventById(this.route.snapshot.paramMap.get('id')).pipe(first()).subscribe(
      (requestedEvent: any) => {
        this.event = requestedEvent
        console.log({requestedEvent})
      },
      (error: any) => {console.log({error})}
    )

  }
}
