import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/userModel';
import { LoginRequest } from '../models/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http : HttpClient) { }

  getAllUsers() : Observable<user[]> {
    return this.http.get<user[]>(this.baseUrl + "users");
  }

  saveUser(username: string, password: string) : Observable<user> {
    console.log({username, password})
    return this.http.post<user>(
        this.baseUrl + "users",
        {username, password}, //* Body
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
  }
}
