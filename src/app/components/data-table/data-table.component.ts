import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { endpoints } from '../../utils/endpoints';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  attributes;
  columns: string[] = ['row', 'name'];
  data = [];
  loading;

  constructor(private logSvc: LogService,) { }

  ngOnInit() {
    this.getLogData();
  }

  getLogData() {
    this.loading = true;
    return this.logSvc.postLogAttrs(endpoints.errors, this.attributes).subscribe((data) => {
      console.log('Res: ', data);
    }, (error) => {
      console.log('Error: ', error);
    }, () => {
      this.loading = false;
    });
  }

}
