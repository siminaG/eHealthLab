import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/service/patients.service';
import { IPatient } from 'src/app/models/iPatient';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private patients$: Observable<IPatient[]>;
  public patientList: IPatient[];

  constructor(private patientService: PatientsService, private  router: Router) { }

  ngOnInit() {
    this.getAllPatients();
  }
  public getAllPatients() {
    this.patients$ = this.patientService.getPatients();
    this.patients$.subscribe(
      data => this.patientList = data,
      error => console.log(error)
    );
  }

  public seePatientDetails(patient: IPatient) {
      this.router.navigateByUrl('/details');
      localStorage.setItem('patientId', patient.id.toString());
  }
}
