import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRiesgoComponent } from './components/Riesgo/list-riesgo/list-riesgo.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterRiesgoComponent } from './components/Riesgo/register-riesgo/register-riesgo.component';
import { FormsModule } from '@angular/forms';
import { UpdateRiesgoComponent } from './components/Riesgo/update-riesgo/update-riesgo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRiesgoComponent,
    RegisterRiesgoComponent,
    UpdateRiesgoComponent,
    NavbarComponent
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
