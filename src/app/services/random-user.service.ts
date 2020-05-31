import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers(): Observable<any> { 
    return this.http.get('https://randomuser.me/api/?results=20');
  }

}
