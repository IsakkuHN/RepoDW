import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css'],
})
export class InstructorListComponent implements OnInit {
  instructores = [];
  @Output() instructorId = new EventEmitter();
  closeResult = '';

  constructor(
    private instructorService: InstructorService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.listarInstructores();
  }

  listarInstructores() {
    this.instructorService.obtenerInstructores().subscribe(
      (result) => {
        this.instructores = result;
        console.log(this.instructores);
      },
      (error) => console.log(error)
    );
  }

  listarClases(value: any) {
    this.instructorId.emit(value);
    console.log(value);
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
