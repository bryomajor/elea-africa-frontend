import { Contact } from './contact-class/contact';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
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
    return this.http.post<Contact>('http://127.0.0.1:8000/contact/{id}', contact, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  } 
}
