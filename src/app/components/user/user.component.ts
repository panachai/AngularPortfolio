import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { TodoService } from '../../services/todo.service';
import { ResponseOptions } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  private name: string;
  private age: number;
  private email: string;

  // dictionary
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  }

  private todoList: Todo[];

  // array
  private skills: string[];

  private isEditable:boolean = true;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.name = "Panachai Niyomkodchakorn";
    this.age = 23;
    this.email = "panachai.ny@gmail.com";

    this.address = {
      street: "16/8",
      city: "bangkunthen",
      province: "Bangkok",
      postcode: "10150"
    }

    this.skills = ["Angular 5", "C#", "MVC"];

    //Call Service
    this.todoService.getTodoList().subscribe((response) => {
      this.todoList = response;
    });
  }

  addSkill(skill) {
    // this.skills.push(skill); //ต่อท้าย
    this.skills.unshift(skill); //ต่อหน้า
    //เพราะ method นี้ยิงจากหน้า html ถ้ารีเทิน true จะทำให้หน้าเพจ refresh
    return false;
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
    return false;
  }
  toggleEdit(){
    this.isEditable =! this.isEditable;
  }
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
