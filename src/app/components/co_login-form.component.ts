import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginData } from './md_login-data.model';

@Component({
  selector: 'cat-login-form',
  templateUrl: './co_login-form.html',
  styleUrls: [ './ca_login-form.css' ],
})
export class LoginFormComponent {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<LoginData>();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
