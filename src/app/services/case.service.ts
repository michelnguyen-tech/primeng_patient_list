import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Case } from '../models/Case';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private http: HttpClient) { }

  getCases() {
    return this.http.get<any>('assets/data.json')
        .toPromise()
        .then(res => <Case[]>res)
        .then(data => { return data; });
  }

  getCaseById(caseId: number) {
    return this.http.get<any>('assets/data.json')
        .toPromise()
        .then(res => <Case[]>res)
        .then(data => { 
          return data.find((item) => (item.case_primary_key == caseId)); })    
  }
}