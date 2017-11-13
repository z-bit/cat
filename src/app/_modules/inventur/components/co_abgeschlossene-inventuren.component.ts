import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { InventurAbgeschlossen } from './md_inventur-abgeschlossen.model';


@Component({
    selector: 'cat-inv-abgeschlossen',
    template:`
        <mat-card>
            <mat-card-title>{{ invJahr }}</mat-card-title>
            <ag-grid-angular
                #agGrid
                class="ag-fresh"
                [gridOptions]="gridOptions"
                style="width: 720px; height: 200px; margin: 10px;"
            ></ag-grid-angular>
        </mat-card>
    `,
    styles: [`
        .right {
            position: relative;
            float: right;
            margin-left: 20px;
        }
    `]
})
export class AbgeschlosseneInventurenComponent implements OnInit {
    @Input() gridData: InventurAbgeschlossen[];
    @Input() invJahr: string;
    @Output() abgInvSelected = new EventEmitter<string>();
    
    
    onSelectionChanged = () =>
        //console.log('sel nr: ', this.gridOptions.api.getSelectedRows()[0].nr);
        this.abgInvSelected.emit(this.gridOptions.api.getSelectedRows()[0]);
    
    gridOptions: GridOptions = {
        columnDefs: [
            {headerName: 'Inventur', field: 'nr', width: 80},
            {headerName: 'Bezeichnung', field: 'bez', width: 220},
            {headerName: 'Zählung 1', field: 'datumZ1', width: 100},
            {headerName: 'Zählung 2', field: 'datumZ2', width: 100},
            {headerName: 'Archiv', field: 'archive', width: 100},
    
        ],
        rowSelection: 'single',
        onSelectionChanged: this.onSelectionChanged
    };
 
    ngOnInit() {
        this.gridOptions.rowData =  this.gridData;
    }
    
}