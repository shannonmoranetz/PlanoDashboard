import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { endpoints } from '../../utils/endpoints';

@Component({
  selector: 'app-data-table-error',
  templateUrl: './data-table-error.component.html',
  styleUrls: ['./data-table-error.component.css']
})
export class DataTableErrorComponent implements OnInit {

  attributes: object;
  columns: string[] = ['id', 'created', 'error'];
  dataSource = [];
  loading: boolean;

  constructor(private logSvc: LogService) { }

  ngOnInit() {
  }

  // Set load status and request type before calling fetch
  initFetch(attributes) {
    this.loading = true;
    this.attributes = attributes;
    this.getErrorData();
  }

  // Subscription to fetch error data (POST request)
  getErrorData() {
    return this.logSvc.postLogAttrs(endpoints.errors, this.attributes).subscribe((res) => {
      console.log('Errors: ', res.data.results);
      this.dataSource = res.data.results;
    }, (error) => {
      this.loading = false;
      console.log('Error: ', error);
    }, () => {
      this.loading = false;
    });
  }

}
