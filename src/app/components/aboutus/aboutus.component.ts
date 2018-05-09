import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  private products: Product[];

  constructor(private todoService: TodoService) { }

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
