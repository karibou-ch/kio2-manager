import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule} from './material.module';
import { KngUserComponent } from './kng-user/kng-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Kng2CoreModule  } from 'kng2-core';

// environnement
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    KngUserComponent,
  ],
  exports:[
    Kng2CoreModule,
    //KngCommonModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    Kng2CoreModule.forRoot({
      API_SERVER: environment.API_SERVER,
      loader: [
        'categories',
        'shops'
      ]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
