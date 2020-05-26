import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, DoCheck } from '@angular/core';
import { DataTableErrorComponent } from '../data-table-error/data-table-error.component';
import { DataTableRequestComponent } from '../data-table-request/data-table-request.component';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit, AfterViewInit, DoCheck {
  
  searchInput: string;
  errorAttributes: any;
  requestAttributes: any;
  whichData: string;

  constructor(public cdr: ChangeDetectorRef) { }
  @ViewChild(DataTableErrorComponent, {static: false}) errorTable: DataTableErrorComponent;
  @ViewChild(DataTableRequestComponent, {static: false}) requestTable: DataTableRequestComponent;

  ngDoCheck() { this.cdr.detectChanges(); }
  
  // Set default attributes (data table POST request body)
  ngOnInit() {
    this.searchInput = null;
    let defaultAttributes = {
      "count": false,
      "view": "dashboard_index",
      "search": {
        "term": "default",
        "attributes": [
          "error_log_id",
          "error"
       ]
      }
    };
    this.errorAttributes = defaultAttributes;
    this.requestAttributes = defaultAttributes;
  }
  
  // Fetch default loaded data (error) on after component init
  ngAfterViewInit() {
    setTimeout(() => {
      this.errorTable.initFetch(this.errorAttributes);
    });
  }

  // Fired on tab click, calls fetch method of child table component
  updateSelectedTab($event) {
    this.whichData = $event.tab.textLabel.toLowerCase();
    if (this.whichData === 'error') {
      this.errorTable.initFetch(this.errorAttributes);
    } else {
      this.requestTable.initFetch(this.requestAttributes);
    }
  }

  submitSearch() {
    this.errorTable.search(this.searchInput);
  }


  

}
