import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;
  constructor(private http: HttpClient) {
    this.columnDefs = [
      {headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
      {headerName: 'Model', field: 'model', sortable: true, filter: true },
      {headerName: 'Price', field: 'price', sortable: true, filter: true }
    ];
    this.sortingOrder = ["desc", "asc", null];
  }
  rowData: any;
 

  ngOnInit() {
      this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}}
