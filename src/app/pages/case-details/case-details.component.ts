import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit {

  caseId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.caseId = this.route.snapshot.params['caseid'];

   console.log(this.caseId);
    
  }

}
