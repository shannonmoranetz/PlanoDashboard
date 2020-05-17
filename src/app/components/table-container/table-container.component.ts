import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, DoCheck } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit, AfterViewInit, DoCheck {
  
  attributes: object;
  
  constructor(public cdr: ChangeDetectorRef) { }
  @ViewChild(DataTableComponent, {static: false}) table: DataTableComponent;

  ngDoCheck() { this.cdr.detectChanges(); }
  
  ngOnInit() {
  }
  
  // Set default attributes (data table POST request body)
  ngAfterViewInit() {
    setTimeout(() => {
      this.attributes = {
        "count": true,
        "filters": [
          "today"
        ],
        "page": {
          "size": 20,
          "number": 1
        },
        "sort": {
          "by": "created_at",
          "order": "desc"
        }
      };
      this.table.initFetch('error', {})
    })

  }
  

}
