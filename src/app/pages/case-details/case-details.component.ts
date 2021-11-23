import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Case } from 'src/app/models/Case';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit {

  caseId: number;
  case: any;
  sexOptions: any[];
  sideOptions: any[];
  value1: string = "off";
  sideValue: string = "L";
  checked: boolean = false;
  modalities: any[];
  procedures: any[];
  families: any[];

  constructor(private caseService: CaseService, private route: ActivatedRoute) { 
    this.sexOptions = [
      { label: "Male", value: "off" },
      { label: "Female", value: "on" }
    ];
    this.sideOptions = [
      { label: "Left", value: "L" },
      { label: "Right", value: "R" }
    ];
    this.modalities = [
      {name: 'CT', code: 'CT'},
      {name: 'MRI', code: 'MR'},
      {name: 'XRAY', code: 'XR'},
      {name: 'Imageless', code: 'NA'}
    ];

    this.procedures = [
      {name: 'Partial', code: 'Partial'},
      {name: 'Total', code: 'Total'},
      {name: 'TSA/Anatomic', code: 'Anatomic'},
      {name: 'RSA/Reverse', code: 'Reverse'},
      {name: 'NA', code: 'NA'}
    ];

    this.families = [
      {name: 'NA', code: 'NA'}
    ];
  }

  ngOnInit(): void {
   this.caseId = this.route.snapshot.params['caseid'];
   this.caseService.getCaseById(this.caseId).then(res => <Case>res).then(c => {
    this.case = c; console.log(this.case)});
  }
}
