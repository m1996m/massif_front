import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MassifComponent } from './massif/massif.component';
import {MassifService} from "./services/massif.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ScrollingModule} from "@angular/cdk/scrolling";
import { CreatMassifComponent } from './creat-massif/creat-massif.component';

@NgModule({
  declarations: [
    AppComponent,
    MassifComponent,
    CreatMassifComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ScrollingModule,
  ],
  providers: [
    MassifService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
