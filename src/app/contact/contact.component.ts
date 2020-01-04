import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact-class/contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  showMsg: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.api.save(form.value).subscribe(
      (data: Contact) => {
        this.showMsg= true;
        form.reset()

        console.log(data);
        // this.contactForm.reset();
      },
      (error: any) => console.log(error)
    );
  }

}
