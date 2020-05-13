import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderResolve } from 'kng2-core';
import { SharedModule } from '../shared/shared.module';

import { KngUserComponent} from './';


// import { NgxStripeModule } from 'ngx-stripe';

// import { UserMdcModule } from './user-mdc.module';
// import { IsAuthenticatedGard } from '../common';
// import { KngCommonModule } from '../common/common.module';
// import { KngUserReminderComponent } from '../shared/kng-user-reminder/kng-user-reminder.component';
//
// define routes module
// get an EmptyError: no elements in sequence with this route


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // NgxStripeModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    // UserMdcModule,
    SharedModule,
    // KngCommonModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [
    KngUserComponent
  ]
})
export class UserModule { }
