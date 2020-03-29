import {Component, OnInit, ViewChild} from '@angular/core';
import { PatientsService } from 'src/app/service/patients.service';
import { IPatient } from 'src/app/models/iPatient';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private patients$: Observable<IPatient[]>;
  public patientList: IPatient[];
  public displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'button'];
  public dataSource: MatTableDataSource<IPatient>;

  constructor(private patientService: PatientsService, private  router: Router) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.getAllPatients();
  }
  public getAllPatients() {
    this.patients$ = this.patientService.getPatients();
    this.patients$.subscribe(
      data => {
        this.patientList = data;
        this.dataSource = new MatTableDataSource<IPatient>(data);
        this.dataSource.paginator = this.paginator;},
      error => console.log(error)
    );
  }

  public seePatientDetails(patient: IPatient) {
      this.router.navigateByUrl('/details');
      localStorage.setItem('patientId', patient.id.toString());
  }
}
