import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  columns: string[] = ['row', 'name'];
  data = [];

  constructor() { }

  ngOnInit() { }

}
