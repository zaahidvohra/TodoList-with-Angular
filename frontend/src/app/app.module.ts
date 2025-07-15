import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './MyComponents/todo/todo.component';
import { TodoListComponent } from './MyComponents/todo-list/todo-list.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './MyComponents/about/about.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
