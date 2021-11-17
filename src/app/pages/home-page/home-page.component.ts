import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Case, Representative, Technology, Anatomy } from '../../models/Case';
import { CaseService } from '../../services/case.service';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cases: Case[];

  selectedCases: Case[];

  representatives: Representative[];

  technologies: Technology[];
  
  anatomies: Anatomy[]

  cols: any[];

  _selectedColumns: any[];

  statuses: any[];

  loading: boolean = true;

  @ViewChild('dt') table: Table;


  constructor(private caseService: CaseService, private primengConfig: PrimeNGConfig) { }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

  filterCol(colname: string) {
    return this._selectedColumns.some(el => {
      //console.log(el.field === colname)
      return el.field === colname;
    }); 
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'technology', header: 'Technology' },
      { field: 'anatomy', header: 'Anatomy' },
      { field: 'status', header: 'Case Status' }
  ];

  this.selectedColumns = this.cols;

    this.caseService.getCaseLarge().then(cases => {
      this.cases = cases;
      this.loading = false;
      
  });

    this.representatives = [
      {name: "Amy Elsner", image: 'amyelsner.png'},
      {name: "Anna Fali", image: 'annafali.png'},
      {name: "Asiya Javayant", image: 'asiyajavayant.png'},
      {name: "Bernardo Dominic", image: 'bernardodominic.png'},
      {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
      {name: "Ioni Bowcher", image: 'ionibowcher.png'},
      {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
      {name: "Onyama Limba", image: 'onyamalimba.png'},
      {name: "Stephen Shaw", image: 'stephenshaw.png'},
      {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    this.technologies = [
      {technology_name: "ROSA Surgical Robot - X-Ray based"},
      {technology_name: "ROSA Surgical Robot - MRI based"},
      {technology_name: "ROSA Surgical Robot - Imageless"},
      {technology_name: "Signature ONE Pure Planning"},
      {technology_name: "Signature ONE Plan and Guides"}
    ];

    this.anatomies = [
      {name: "Knee"},
      {name: "Shoulder"},
    ];

    this.statuses = [
      {label: 'CASE_CREATED_AWAITING_IMAGES', value: 'CASE_CREATED_AWAITING_IMAGES'},
      {label: 'CANCELLED', value: 'CANCELLED'},
      {label: 'PLANNING_READY'	, value: 'PLANNING_READY'},
      {label: 'TRIAGE', value: 'TRIAGE'},
      {label: 'CLOSED', value: 'CLOSED'},
      {label: 'SURGEON_PLANNING_APPROVED', value: 'SURGEON_PLANNING_APPROVED'},
      {label: 'SCAN_UPLOADED', value: 'SCAN_UPLOADED'},
    ]
    
    this.primengConfig.ripple = true;
  }

  onActivityChange(event: any) {
  const value = event.target.value;
    if (value && value.trim().length) {
        const activity = parseInt(value);

        if (!isNaN(activity)) {
            this.table.filter(activity, 'activity', 'gte');
        }
    }
  }

  onDateSelect(value: any) {
  this.table.filter(this.formatDate(value), 'date', 'equals')
  }

  formatDate(date: any) {
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
      month = '0' + month;
  }

  if (day < 10) {
      day = '0' + day;
  }

  return date.getFullYear() + '-' + month + '-' + day;
  }

  onRepresentativeChange(event: any) {
  this.table.filter(event.value, 'representative', 'in')
  }

  onTechnologyChange(event: any) {
    console.log(event.value);
    //console.log(this.table.filter(event.value[0], 'technology_name', 'equals'));
    this.table.filter(event.value[0].technology_name, 'technology_name', 'equals')
    //this.table.filter(event.value, 'technology_name', 'in')
    //this.table.filters['technology_name'] = [{value: event.value, matchMode: "in", operator: "or"}];
    }

    onAnatomyChange(event: any) {
      console.log(event.value);
      //console.log(this.table.filter(event.value[0], 'technology_name', 'equals'));
      this.table.filter(event.value[0].name, 'anatomy', 'equals')
      //this.table.filter(event.value, 'name', 'in')
      //this.table.filters['technology_name'] = [{value: event.value, matchMode: "in", operator: "or"}];
      }
}


