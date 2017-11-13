import {Component, AfterViewInit, ViewChild, Renderer2, ElementRef} from '@angular/core';
import { LoginData } from './md_login-data.model';
import { Store } from '@ngrx/store';
import * as storeIndex from '../store';
import { LoginService } from './sv_login.service';
import * as userActions from '../store/user.actions';


@Component({
  selector: 'cat-login-page',
  templateUrl: './cn_login-page.html',
  styleUrls: [ './cn_login-page.css' ]
})
export class LoginPageComponent implements AfterViewInit {

  // login: LoginData = {name: '', pass: '', fa: ''};
  fa: string;
  showSpinPnr = false;

  @ViewChild('pnrInput') pnrInput: ElementRef;
  @ViewChild('btPnr') btPnr;
  

  showSpinLogin = false;
  @ViewChild('loginName') loginName;
  @ViewChild('loginPass') loginPass;

  @ViewChild('btLogin') btLogin;

  constructor(
    private store: Store<storeIndex.State>,
    private loginService: LoginService,
    private renderer: Renderer2, private elementRef: ElementRef
  ) {
    const fa$ = this.store.select(storeIndex.getFirma).take(2);
    const user$ = this.store.select(storeIndex.getUser);
    // Der 1. Wert ist undefiniert, dann setzen wir die Firma.
    // Ist der 2. Wert OK => redirect zu Home.
    // Bei Fehler redirect zur FirmaPage.
    fa$
    .subscribe(
    firma => this.fa = firma.fa,
    error => console.log(error), // todo error -> redirect to FirmaPage
    () => console.log('LoginPage - (1) Firma set to ' + this.fa)
    )
    ;
  }

  ngAfterViewInit() {
    this.showSpinPnr = false;
    this.showSpinLogin = false;

    // this does not work:
    // this.renderer.selectRootElement('.focus').focus();

    // this.pnrInput.nativeElement.focus();

    // const el = document.getElementById('#pnrInput');
    // if (el) {
    //   el.focus();
    // }

    // this.elementRef.nativeElement.querySelector('.focus').focus();
  }

  sendPnr() {
    const login: LoginData = {
      fa: this.fa,
      pass: '',
      name: this.pnrInput.nativeElement.value
    };
    this.pnrInput.nativeElement.value = '';
    this.btPnr.focus();
    this.showSpinPnr = true;
    this.store.dispatch(new userActions.Login(login));
  }

  sendLogin() {
    const login: LoginData = {
      fa: this.fa,
      name: this.loginName.nativeElement.value,
      pass: this.loginPass.nativeElement.value
    };
    this.btLogin.focus();
    this.showSpinLogin = true;
    this.store.dispatch(new userActions.Login(login));
  }
}
