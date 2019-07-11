import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {TodosService} from '../shared/todos.servise';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private loading: boolean = true
  private searchString: string = ''

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false
    })
  }

  onChange(id: number) {
    // this.onToggle.emit(id)
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

}
