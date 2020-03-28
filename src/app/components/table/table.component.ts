import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/service/patients.service';
import { IPatient } from 'src/app/models/iPatient';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private patients$: Observable<IPatient[]>;
  public patientList: IPatient[];

  constructor(private patientService: PatientsService) { }

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
}
