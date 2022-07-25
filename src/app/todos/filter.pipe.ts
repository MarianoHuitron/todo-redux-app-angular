import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case 'complete':
        return todos.filter(todo => todo.completado);
      case 'pending':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
