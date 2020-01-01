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
  fullname: string;
  useremail: string;
  usermessage: string;
  contact: Contact;
  // contactForm: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  // processForm() {
  //   const allinfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}.`;
  //   alert(allinfo)
  // }

  processForm = () => {
    const allinfo = `My name is ${this.fullname}. My email is ${this.useremail}. My message is ${this.usermessage}.`;
    alert(allinfo)
  }

  // newContact(){}

  onSubmit(form: NgForm) {
    this.api.save(form.value).subscribe(
      (data: Contact) => {

        console.log(data);
        // this.contactForm.reset();
      },
      (error: any) => console.log(error)
    );
  }

}
