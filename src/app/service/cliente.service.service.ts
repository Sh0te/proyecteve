import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = "http://localhost/apis/apievebd/controlador/cliente";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/getUser.php`)
  };

  getUsersID(id: number): Observable<any> {
    return this.http.get(`${this.url}/getUser.php?id=` + id)
  };

  deleteUsers(id: number): Observable<any> {
    return this.http.delete(`${this.url}/deleteUser.php`)
  };

  login(user: any): Observable<any> {
    return this.http.post(`${this.url}/login.php`, JSON.stringify(user));
  };

  insertUsers(user: any): Observable<any> {
    return this.http.post(`${this.url}/postUser.php`, JSON.stringify(user));
  };

  editUsers(user: any): Observable<any> {
    return this.http.put(`${this.url}/putUser.php`, JSON.stringify(user))
  };


}
