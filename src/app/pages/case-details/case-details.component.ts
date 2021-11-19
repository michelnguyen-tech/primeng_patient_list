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

  constructor(private caseService: CaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.caseId = this.route.snapshot.params['caseid'];
   this.caseService.getCaseById(this.caseId).then(res => <Case>res).then(c => {
    this.case = c; console.log(this.case)});
  }
}
