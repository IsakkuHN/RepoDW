import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/interface/clase';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-class-content',
  templateUrl: './class-content.component.html',
  styleUrls: ['./class-content.component.css']
})
export class ClassContentComponent implements OnInit {
  show: boolean = false;
  clase!: Clase;
  constructor(private instructorService: InstructorService) { }

  ngOnInit(): void {
  }

  cargarClase(value: any){
    this.clase = value;
  }
}
