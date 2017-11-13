import { Component } from '@angular/core';

@Component({
  selector: 'cat-getfirma-fail',
  template: `
    <h3>
      Das Ermitteln der Firma ist fehlgeschlagen.
    </h3>
  `,
})
export class GetfirmaFailComponent {
  // todo implement GetfirmaFailComponent
  // make sure error has ip in it
  // http.get(firma/all)
  // rze.firma: ip15 - fa - fi - name - db - ipsum - subnet - nml - admin - vpnr
  // user selects
  // ip15=ip, ipsum=calculate, subnet=ip, - nml=32
  // firmaActions.setFirma (includes userActions.LoginRedirect, only allow pnr-login??)
  // http.post(firma)
  // log this event
  // mail an admin to check if improvement of ip logic possible
}