import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  sendingRequest = false
  formSiteFormGroup: FormGroup;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.formSiteFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
    })
  }

  onSubscribe(event: any) {
    this.sendingRequest = true
    console.log(this.formSiteFormGroup.value);
    const subscriptionFormData = new FormData()
    subscriptionFormData.append('email', this.formSiteFormGroup.value.email)

    if (this.formSiteFormGroup.invalid) return

    this
      .api
      .submitSubscription(subscriptionFormData)
      .pipe(first())
      .subscribe(
        (data: any) => {
          console.log(data)
        },
        (error: any) => {
          console.log({error})
          this.sendingRequest = false
        }
      )
  }

  // onSubmit(form: NgForm) {
  //   this.api.save(form.value).subscribe(
  //     (data: any) => {

  //       console.log(data);
  //       // this.contactForm.reset();
  //     },
  //     (error: any) => console.log(error)
  //   );
  // }

}
