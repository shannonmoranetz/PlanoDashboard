import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
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
  whichData;

  constructor(private logSvc: LogService) { }

  ngOnInit() {
    this.initFetch(
      {tab: { textLabel: 'error' }}
    );
  }

  initFetch($event) {
    this.loading = true;
    this.whichData = $event.tab.textLabel.toLowerCase();
    this.getLogData();
  }

  returnEndpoint() {
    console.log('Data Type: ', this.whichData);
    return this.whichData === 'error' ? endpoints.errors : endpoints.requests;
  }

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
