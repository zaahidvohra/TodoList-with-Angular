import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoComponent } from './todo.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';


describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent, AddTodoComponent],
      imports: [HttpClientTestingModule, FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
