import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
// mport { KngInputValidator } from '../shared';


@Component({
  selector: 'app-kng-user',
  templateUrl: './kng-user.component.html',
  styleUrls: ['./kng-user.component.scss']
})
export class KngUserComponent implements OnInit {

  sign: any;

  constructor(
    private $fb: FormBuilder,
  ) {

      this.sign = this.$fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

   }

  ngOnInit(): void {
  }

  onSign() {
    console.log('sign');
    // this.$user.login({
    //   email: this.sign.value.email,
    //   password: this.sign.value.password,
    //   provider: 'local'
    // }).subscribe(
    // (user: User) => {
    //   if (!user.isAuthenticated()) {
    //     return this.$snack.open(this.$i18n.label().user_login_ko, this.$i18n.label().thanks, this.$i18n.snackOpt);
    //   }
    //   this.$snack.open(this.$i18n.label().user_login_ok, this.$i18n.label().thanks, this.$i18n.snackOpt);
    //   this.onBack();
    // }, (err) => this.$snack.open(err.error, this.$i18n.label().thanks, this.$i18n.snackOpt));
  }

}
