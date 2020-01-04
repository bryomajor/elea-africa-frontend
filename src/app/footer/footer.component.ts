import { NgForm } from '@angular/forms';
import { Subscription } from './../subscription/subscription';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showMsg: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
}

  onSubscribe(form: NgForm) {
    this.api.submitSubscription(form.value).subscribe(
      (data: Subscription) => {
        this.showMsg= true;
        form.reset()
        console.log(data);
      },
      (error: any) => console.log(error)
    );
  }
}