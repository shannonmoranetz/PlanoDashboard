import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { endpoints } from '../../utils/endpoints';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  attributes: object;
  columns: string[] = ['row', 'name'];
  data = [];
  loading: boolean;
  whichData: string;

  constructor(private logSvc: LogService) { }

  // Fetch default (error) logs on component init
  ngOnInit() {
    this.initFetch('error', {});
  }

  // Set load status and request type before calling fetch
  initFetch($event, attributes) {
    this.loading = true;
    this.whichData = $event.toLowerCase();
    this.getLogData();
  }

  // Return appropriate request type variable based on tab selection
  returnEndpoint() {
    console.log('Data Type: ', this.whichData);
    return this.whichData === 'error' ? endpoints.errors : endpoints.requests;
  }

  // Subscription to fetch request data (POST request)
  getLogData() {
    return this.logSvc.postLogAttrs(this.returnEndpoint(), this.attributes).subscribe((data) => {
      console.log('Res: ', data);
    }, (error) => {
      this.loading = false;
      console.log('Error: ', error);
    }, () => {
      this.loading = false;
    });
  }

}
