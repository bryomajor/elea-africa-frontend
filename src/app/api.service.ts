import { Subscription } from './subscription/subscription';
import { Contact } from './contact-class/contact';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "https://elea-africa-backend.herokuapp.com";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<any> {
    return this.http.get(this.baseurl + '/events/', 
    {headers: this.httpHeaders});
  }

  getEventById(id: any){
    return this.http.get(this.baseurl + '/events/' + id + '/', 
    {headers: this.httpHeaders});
  }

  save(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>('https://elea-africa-backend.herokuapp.com/contact/', contact, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  } 

  submitSubscription(subscriptionData: Subscription): Observable<Subscription>{
    return this.http.post<Subscription>('https://elea-africa-backend.herokuapp.com/subscribe/', subscriptionData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  } 
}
