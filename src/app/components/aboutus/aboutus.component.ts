import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  private products: Product[];

  // constructor() { }
  constructor(private todoService: TodoService, private appcomponent: AppComponent) {
    this.appcomponent.setTitle('Aboutus Resume');
  }

  ngOnInit() {
    this.todoService.getTestCallApi().subscribe((response) => {
      this.products = response;
    });
  }

}

interface Product {
  id: number;
  name: string;
}
