import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino: string = '';
  @Input() search: string= '';
  @Output() OnEnter: EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe((valor)=>{
      this.OnDebounce.emit(valor);
    })
  }

  buscar(){
     this.OnEnter.emit(this.termino);
  }

  teclaPresionada(){
      this.debouncer.next(this.termino);
  }

}
