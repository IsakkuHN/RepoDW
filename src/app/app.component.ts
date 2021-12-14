import { Component, ViewChild } from '@angular/core';
import { ClassContentComponent } from './component/class-content/class-content.component';
import { ClassDetailComponent } from './component/class-detail/class-detail.component';
import { ClassThumbnailComponent } from './component/class-thumbnail/class-thumbnail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repo-dw';
  @ViewChild('classmin')
  classThumb!: ClassThumbnailComponent;
  @ViewChild('classdetail')
  classDetail!: ClassDetailComponent;
  @ViewChild('classcontent')
  classContent!: ClassContentComponent;


  cargarClases(value: any){
    console.log('array desde app',value);
    this.classThumb.mostrarClase(value);
    this.classDetail.mostrarClase(value);
  }

  mostrarDetalles(value: any){
    this.classContent.show = true;
    console.log(value);
    this.classContent.cargarClase(value);
  }

}



