import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import User from '../models/user';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // create instance of the Subject class with a generic type of User.
  private userInfoSubject = new Subject<User>();
  // exposing an observable userInfo$ derived from the userInfoSubject
  userInfo$ = this.userInfoSubject.asObservable();

  // constructor dependency injection - use http to fetch data from api
  constructor(private http: HttpClient) {}

  // get array of users from api
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${BASE_URL}`, httpOptions);
  }

  // get single user from api using id.
  getUsersById(id: number): Observable<User> {
    return this.http.get<User>(`${BASE_URL}/${id}`, httpOptions);
  }

  // get single user infomation and emit to subscribers
  getUserInfoAndEmit(id: number) {
    this.getUsersById(id).subscribe({
      next: (user) => {
        console.log(user);
        this.userInfoSubject.next(user);
      },
      error: (error) => {
        console.error('Error fetching user info:', error);
      },
    });
  }
}
