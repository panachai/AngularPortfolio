import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms' // import เพื่อใช้ ngModel บน View
import { TodoService } from './services/todo.service' // Service
import { HttpModule } from '@angular/http'; // Module Service
import { RouterModule, Routes } from '@angular/router'; //router
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const appRoutes: Routes = [
  { path: "", component: UserComponent },
  { path: "about", component: AboutusComponent },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  declarations: [ // Component
    AppComponent,
    UserComponent,
    NavbarComponent,
    AboutusComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) //routes
  ], // Service
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
