import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http : HttpClient) { }

  getAllUsers() : Observable<user[]> {
    return this.http.get<user[]>(this.baseUrl + "users");
  }
}
