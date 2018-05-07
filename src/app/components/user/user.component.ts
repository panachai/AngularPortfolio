import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

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

  // array
  private skills: string[];

  constructor() { }

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

}
