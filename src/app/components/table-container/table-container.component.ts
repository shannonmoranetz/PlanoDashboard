import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit {
  @ViewChild(DataTableComponent, {static: false}) table: DataTableComponent;

  constructor() { }

  ngOnInit() {
  }

}
