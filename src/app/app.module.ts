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

// ngx-Boostrap //ย้ายไป app-bootstrap
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { ModalModule } from 'ngx-bootstrap/modal';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module'; //pack ไฟล์ Boostrap แล้วดึงมา

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
    [BrowserModule, AppBootstrapModule],
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), //routes 
  ],
  providers: [TodoService],// Service
  bootstrap: [AppComponent]
})
export class AppModule { }
