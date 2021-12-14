import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private httpClient: HttpClient) { }

  obtenerInstructores():Observable<any>{
    return this.httpClient.get('http://localhost:3550/instructor');
  }

  obtenerClase(id:any): Observable<any>{
    return this.httpClient.get('http://localhost:3550/clase/'+id);
  }

}
