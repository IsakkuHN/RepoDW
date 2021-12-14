import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  show = true;
  classes = [];

  @Output() idClase = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarClase(value:any){
    this.classes = value;
  }

  verClaseDetalles(id:string){
    this.idClase.emit(id);
    this.show = false;
  }
}
