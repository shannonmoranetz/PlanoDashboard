import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, DoCheck } from '@angular/core';
import { DataTableErrorComponent } from '../data-table-error/data-table-error.component';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit, AfterViewInit, DoCheck {
  
  attributes: object;
  
  constructor(public cdr: ChangeDetectorRef) { }
  @ViewChild(DataTableErrorComponent, {static: false}) table: DataTableErrorComponent;

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
