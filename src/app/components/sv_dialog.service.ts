import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

import { Firma } from './md_firma.model';
import { User } from './md_user.model';

import { LoginDialogComponent } from './di_login-dialog.component';
import { FirmaDialogComponent } from './di_firma-dialog.component';
import { UserDialogComponent } from './di_user-dialog.component';



@Injectable()
export class DialogService {
    constructor(private dialog: MatDialog) {}

    public loginDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '800px';
        dialogConfig.height = '420px';
        dialogConfig.disableClose = true;
        const dialogRef: MatDialogRef<LoginDialogComponent>
            = this.dialog.open(LoginDialogComponent, dialogConfig);
        return dialogRef.afterClosed();
    }

    // Anzeige Firma
    public firmaDialog(firma: Firma): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '400px';
        dialogConfig.height = '370px';
        const dialogRef: MatDialogRef<FirmaDialogComponent>
            = this.dialog.open(FirmaDialogComponent, dialogConfig);
        dialogRef.componentInstance.firma = firma;
        // return dialogRef.afterClosed();
    }

    // Anzeige User
    public userDialog(user: User): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '400px';
        dialogConfig.height = '470px';
        const dialogRef: MatDialogRef<UserDialogComponent>
            = this.dialog.open(UserDialogComponent, dialogConfig);
        dialogRef.componentInstance.user = user;
        // return dialogRef.afterClosed();
    }
}

