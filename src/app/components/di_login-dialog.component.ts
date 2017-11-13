import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginData } from './md_login-data.model';

@Component({
  selector: 'cat-login-dialog',
  templateUrl: 'di_login-dialog.html',
  styleUrls: [ 'di_login-dialog.css' ]
})
export class LoginDialogComponent {
  public login: LoginData = {name: '', pass: '', fa: ''};

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>) {
  }

  showSpinPnr = false;
    @ViewChild('pnrInput') pnrInput;
    @ViewChild('btPnr') btPnr;

    showSpinLogin = false;
    @ViewChild('loginName') loginName;
    @ViewChild('loginPass') loginPass;

    @ViewChild('btLogin') btLogin;

    sendPnr() {
      this.login.pass = '';
      this.login.name = this.pnrInput.nativeElement.value;
      this.pnrInput.nativeElement.value = '';
      this.btPnr.focus();
      this.showSpinPnr = true;
      this.dialogRef.close(this.login);
      // this.pnrEvent.emit(pnr);
    }

    sendLogin() {
      this.login.name = this.loginName.nativeElement.value;
      this.login.pass = this.loginPass.nativeElement.value;
      this.btLogin.focus();
      this.dialogRef.close(this.login);
    }
}
