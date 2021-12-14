import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClassListComponent } from './component/class-list/class-list.component';
import { ClassDetailComponent } from './component/class-detail/class-detail.component';
import { ClassThumbnailComponent } from './component/class-thumbnail/class-thumbnail.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssigmentsComponent } from './component/assigments/assigments.component';
import { ClassContentComponent } from './component/class-content/class-content.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ClassListComponent,
    ClassDetailComponent,
    ClassThumbnailComponent,
    InstructorListComponent,
    AssigmentsComponent,
    ClassContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
