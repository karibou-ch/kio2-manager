import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { KngInputValidator, KngControlMessagesComponent } from '../shared';
import { i18n } from '../common/i18n.service';
import { UserService, User, Config } from 'kng2-core';
import { MdcSnackbar } from '@angular-mdc/web';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-kng-user',
  templateUrl: './kng-user.component.html',
  styleUrls: ['./kng-user.component.scss']
})

export class KngUserComponent implements OnInit {

  sign: any;
  config: Config;
  user: User = new User();
  isReady = false;
  recover: any;
  signup: any;
  store: string;
  askAction: string;

  constructor(
    public  $i18n: i18n,
    private $user: UserService,
    private $fb: FormBuilder,
    private $snack: MdcSnackbar,
    private $route: ActivatedRoute,
    private $router: Router,


  ) {
        //
    // initialize HTML content (check on route definition)
    this.askAction = this.$route.snapshot.data.action;
    //
    // initialize loader
    const loader = this.$route.snapshot.data.loader;
    console.log(loader);
    //
    // system ready
    // this.isReady = true;
    // this.config = loader[0];
    // this.user   = loader[1];


      this.sign = this.$fb.group({
        'email': ['', [Validators.required, KngInputValidator.emailValidator]],
        'password': ['', [Validators.required, KngInputValidator.passwordValidator]]
      });

   }

  ngOnInit(): void {
  }

  onSign() {
    // console.log('sign email', this.sign.value.email);
    // console.log('sign pwd', this.sign.value.password);
    // console.log('----',environment.API_SERVER);
    this.$user.login({
      email: this.sign.value.email,
      password: this.sign.value.password,
      provider: 'local'
    }).subscribe(
    (user: User) => {
      console.log('coucou1 ');
      if (!user.isAuthenticated()) {
        return this.$snack.open(this.$i18n.label().user_login_ko, this.$i18n.label().thanks, this.$i18n.snackOpt);
      }
      this.$snack.open(this.$i18n.label().user_login_ok, this.$i18n.label().thanks, this.$i18n.snackOpt);
      //this.onBack();
    }, (err) => this.$snack.open(err.error, this.$i18n.label().thanks, this.$i18n.snackOpt));
  }

}
