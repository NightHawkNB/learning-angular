import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http : HttpClient) { }

  getAllUsers() {
    return this.http.get(this.baseUrl + "users");
  }
}
