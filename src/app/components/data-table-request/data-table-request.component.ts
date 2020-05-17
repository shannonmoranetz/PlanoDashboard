import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { endpoints } from '../../utils/endpoints';

@Component({
  selector: 'app-data-table-request',
  templateUrl: './data-table-request.component.html',
  styleUrls: ['./data-table-request.component.css']
})
export class DataTableRequestComponent implements OnInit {

  attributes: object;
  columns: string[] = ['id', 'version', 'service', 'created', 'action', 'result'];
  dataSource = [];
  loading: boolean;

  constructor(private logSvc: LogService) { }

  ngOnInit() {
  }

  // Set load status and request type before calling fetch
  initFetch(attributes) {
    this.loading = true;
    this.attributes = attributes;
    this.getRequestData();
  }

  // Subscription to fetch request data (POST request)
  getRequestData() {
    return this.logSvc.postLogAttrs(endpoints.requests, this.attributes).subscribe((res) => {
      console.log('Requests: ', res.data.results);
      this.dataSource = res.data.results;
    }, (error) => {
      this.loading = false;
      console.log('Error: ', error);
    }, () => {
      this.loading = false;
    });
  }

}
