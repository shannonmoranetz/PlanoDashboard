import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit {
  @ViewChild(DataTableComponent, {static: false}) table: DataTableComponent;

  attributes: object;

  constructor() { }

  // Set default attributes (data table POST request body)
  ngOnInit() {
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
  }
  

}
