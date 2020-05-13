import {NgModule} from '@angular/core';
import {MdcDrawerModule} from '@angular-mdc/web/drawer';
import {MdcButtonModule} from '@angular-mdc/web/button';
import {MdcListModule} from '@angular-mdc/web/list';
import {MdcTypographyModule} from '@angular-mdc/web/typography';
import {MdcIconModule} from '@angular-mdc/web/icon';
import {MdcTextFieldModule} from '@angular-mdc/web/textfield';

@NgModule({
  exports: [
    MdcDrawerModule,
    MdcButtonModule,
    MdcTypographyModule,
    MdcListModule,
    MdcIconModule,
    MdcTextFieldModule
  ]
})
export class MaterialModule {

}
