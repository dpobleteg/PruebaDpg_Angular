import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { User } from './user';
import { Http } from '@angular/http';
import { UrlHandlingStrategy } from '@angular/router';

const cudOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class UsersService {
  // tslint:disable-next-line:no-inferrable-types
  private userUrl: string = '/api/users';
  constructor(private http: HttpClient) {  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .catch(this.handletError);
  }

  getUser(id: string | number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url)
      .catch(this.handletError);

  }

  addUser(user: User): Observable<User> {
    const newUser = Object.assign({}, user);
    return this.http.post<User>(this.userUrl, newUser, cudOptions)
      .catch(this.handletError);

  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.Id;
    const url = `${this.userUrl}/${id}`;

    return this.http.delete<User>(url, cudOptions);

  }

  updateUser(user: User ): Observable<User> {
    return this.http.put<User>(this.userUrl, user, cudOptions);

  }



  private handletError(error: any) {
    console.error(error);
    return Observable.throw(error);

  }
}
