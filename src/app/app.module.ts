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
import { ListSegmentoComponent } from './components/segmento/list-segmento/list-segmento.component';
import { RegisterSegmentoComponent } from './components/segmento/register-segmento/register-segmento/register-segmento.component';
import { UpdateSegmentoComponent } from './components/segmento/update-segmento/update-segmento/update-segmento.component';
import { ListVariableComponent } from './components/variable/list-variable/list-variable/list-variable.component';
import { RegisterVariableComponent } from './components/variable/register-variable/register-variable/register-variable.component';
import { UpdateVariableComponent } from './components/variable/update-variable/update-variable/update-variable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ListPerfilVariableComponent } from './components/PerfilVariable/list-perfilVariable/list-perfil-variable/list-perfil-variable.component';
import { ListPerfilComponent } from './components/Perfil/list-perfil/list-perfil/list-perfil.component';
import { ListFuenteInformacionComponent } from './components/FuenteInformacion/list-fuenteInformacion/list-fuente-informacion/list-fuente-informacion.component';
import { ListRiesgoCuadranteComponent } from './components/RiesgoCuadrante/list-riesgoCuadrante/list-riesgo-cuadrante/list-riesgo-cuadrante.component';
import { RegisterRiesgoCuadranteComponent } from './components/RiesgoCuadrante/register-riesgoCuadrante/register-riesgo-cuadrante/register-riesgo-cuadrante.component';
import { UpdateRiesgoCuadranteComponent } from './components/RiesgoCuadrante/update-riesgoCuadrante/update-riesgo-cuadrante/update-riesgo-cuadrante.component';
import { ListRiesgoVariableComponent } from './components/RiesgoVariable/list-riesgoVariable/list-riesgo-variable/list-riesgo-variable.component';
import { RegisterRiesgoVariableComponent } from './components/RiesgoVariable/register-riesgoVariable/register-riesgo-variable/register-riesgo-variable.component';
import { UpdateRiesgoVariableComponent } from './components/RiesgoVariable/update-riesgoVariable/update-riesgo-variable/update-riesgo-variable.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ListRiesgoComponent,
    RegisterRiesgoComponent,
    UpdateRiesgoComponent,
    NavbarComponent,
    ListSegmentoComponent,
    RegisterSegmentoComponent,
    UpdateSegmentoComponent,
    ListVariableComponent,
    RegisterVariableComponent,
    UpdateVariableComponent,
    FooterComponent,
    ListPerfilVariableComponent,
    ListPerfilComponent,
    ListFuenteInformacionComponent,
    ListRiesgoCuadranteComponent,
    RegisterRiesgoCuadranteComponent,
    UpdateRiesgoCuadranteComponent,
    ListRiesgoVariableComponent,
    RegisterRiesgoVariableComponent,
    UpdateRiesgoVariableComponent,
    FilterPipe,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
