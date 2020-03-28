import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPatient } from '../models/iPatient';



@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  public getPatients(): Observable<IPatient[]> {
      return this.http.get<IPatient[]>('https://alexgr.ro/ehealth/patients.json');
  }
}


