import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entity/User';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public url = "http://192.168.176.230:8000/";

  constructor(private httpClient: HttpClient) { }

  login(data): Observable<User>
  {
    return this.httpClient.post<User>(this.url + 'user/login', data);
  }
}
