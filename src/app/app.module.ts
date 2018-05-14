import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

// import เพื่อใช้ ngModel บน View
import { FormsModule } from '@angular/forms'

// Module Service
import { TodoService } from './services/todo.service'
import { HttpModule } from '@angular/http';

//router
import { RouterModule, Routes } from '@angular/router';

//pack ไฟล์ Boostrap แล้วดึงมา
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { RegisterComponent } from './components/register/register.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

const appRoutes: Routes = [
  { path: "", component: AboutmeComponent },
  { path: "about", component: AboutusComponent },
  { path: "register", component: RegisterComponent },
  { path: "user", component: UserComponent },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    RegisterComponent,
    AboutmeComponent,
    AboutusComponent,
    NotfoundComponent
  ],
  imports: [
    [BrowserModule, AppBootstrapModule],
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
