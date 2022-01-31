import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRiesgoComponent } from './Riesgo/list-riesgo/list-riesgo.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterRiesgoComponent } from './Riesgo/register-riesgo/register-riesgo.component';
import { FormsModule } from '@angular/forms';
import { UpdateRiesgoComponent } from './Riesgo/update-riesgo/update-riesgo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRiesgoComponent,
    RegisterRiesgoComponent,
    UpdateRiesgoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
