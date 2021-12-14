import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-thumbnail',
  templateUrl: './class-thumbnail.component.html',
  styleUrls: ['./class-thumbnail.component.css']
})
export class ClassThumbnailComponent implements OnInit {
  clases =[];
  showClasses = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarClase(iDvalue:any){
    this.clases = iDvalue;
    this.showClasses = true;
  }
}
