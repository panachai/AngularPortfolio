import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms' // import เพื่อใช้ ngModel บน View
import { TodoService } from './services/todo.service' // Service

@NgModule({
  declarations: [ // Component
    AppComponent,
    UserComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ], // Service
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
