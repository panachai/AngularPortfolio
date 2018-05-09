import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

  getTestCallApi(){
    return this.http
    .get("http://localhost:3000/api/product")
    .map(res => res.json());
  }

}