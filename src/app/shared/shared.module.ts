// exported components and directives
import { NgModule, ModuleWithProviders } from '@angular/core';

import { KngControlMessagesComponent } from './kng-control-messages/control-messages.component';
import { RouterModule } from '@angular/router';
//import { KngCommonModule } from '../common/common.module';

@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    // RouterModule,
    // Kng2CoreModule,
    // KngSharedMdcModule,
    // KngCommonModule,
    // RouterModule.forChild(appRoutes),
  ],
  exports: [
    KngControlMessagesComponent,
  ],
  declarations: [
    KngControlMessagesComponent,
  ],
})
export class SharedModule {
  public static forRoot(options?: any): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
}
