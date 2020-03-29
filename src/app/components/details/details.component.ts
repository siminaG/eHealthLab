import { Component, OnInit } from '@angular/core';
import {PatientsService} from '../../service/patients.service';
import {IPatient} from '../../models/iPatient';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public patient: IPatient = {id: 0, first_name: "", last_name: "", email: "", gender: "", diagnosis_code: "", diagnosis_description: "",
                              diagnosis_description_detailed: "", administered_drug_treatment: ""};
  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.getPatientDetails();
  }

   public getPatientDetails() {
    const patientId: string = localStorage.getItem('patientId');
    this.patientsService.getPatients().subscribe(
      data => {
        data.forEach(patient => {
          if (patient.id.toString() === patientId) {
            this.patient = patient;
          }}),
          error => console.log(error);
      }
    );
   }
}
