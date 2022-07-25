import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild("inputFisico") txtFisico: ElementRef;
  chkCompletado: FormControl;
  txtInput: FormControl;
  editing: boolean = false;


  constructor(private _store: Store<AppState>) {
    console.log(this.todo);
   
  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    
    this.chkCompletado.valueChanges.subscribe((valor) => {
      this._store.dispatch(actions.toggle({id: this.todo.id}))
    });
  }

  editar() {
    this.editing = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtFisico.nativeElement.select();
    },0)
  }

  terminarEdicion() {
    this.editing = false;

    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.texto) return;

    this._store.dispatch(actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value
    }));
  }

  borrar() {
    this._store.dispatch(actions.borrar({id: this.todo.id}));
  }

}
