import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: Http) {
  }

  getTodoList() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/todos")
      .map(res => res.json());
  }

}