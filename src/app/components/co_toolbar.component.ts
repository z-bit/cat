import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DialogService } from './sv_dialog.service';
import { MatMenuTrigger, MatIcon, MatToolbar } from '@angular/material';

@Component({
    selector: 'cat-toolbar',
    templateUrl: './co_toolbar.html',
    styleUrls: [ './co_toolbar.css'],
})
export class ToolbarComponent {
    @Input() caption: string;
    @Input() banner: string;
    @Input() modules: string[];

    @Input() firma;
    @Input() user;
    @Output() logout =  new EventEmitter();
    @Output() selectedFromMenu = new EventEmitter();

    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    constructor(
        public dialogService: DialogService,
    ) {}

    openFirmaDialog() {
        this.dialogService.firmaDialog(this.firma);
    }

    openUserDialog() {
        this.dialogService.userDialog(this.user);
    }
}

