import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, DoCheck } from '@angular/core';
import { DataTableErrorComponent } from '../data-table-error/data-table-error.component';
import { DataTableRequestComponent } from '../data-table-request/data-table-request.component';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit, AfterViewInit, DoCheck {
  
  errorAttributes: object;
  requestAttributes: object;
  whichData: string;

  constructor(public cdr: ChangeDetectorRef) { }
  @ViewChild(DataTableErrorComponent, {static: false}) errorTable: DataTableErrorComponent;
  @ViewChild(DataTableRequestComponent, {static: false}) requestTable: DataTableRequestComponent;

  ngDoCheck() { this.cdr.detectChanges(); }
  
  ngOnInit() {
  }
  
  // Set default attributes (data table POST request body)
  ngAfterViewInit() {
    setTimeout(() => {
      this.errorTable.initFetch(this.errorAttributes);
    });
  }

  updateSelectedTab($event) {
    this.whichData = $event.tab.textLabel.toLowerCase();
    if (this.whichData === 'error') {
      this.errorTable.initFetch(this.errorAttributes);
    } else {
      console.log('fire')
      this.requestTable.initFetch(this.requestAttributes);
    }
  }


  

}
