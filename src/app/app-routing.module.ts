import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFuenteInformacionComponent } from './components/FuenteInformacion/list-fuenteInformacion/list-fuente-informacion/list-fuente-informacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPerfilComponent } from './components/Perfil/list-perfil/list-perfil/list-perfil.component';
import { ListPerfilVariableComponent } from './components/PerfilVariable/list-perfilVariable/list-perfil-variable/list-perfil-variable.component';
import { ListRiesgoComponent } from './components/Riesgo/list-riesgo/list-riesgo.component';
import { RegisterRiesgoComponent } from './components/Riesgo/register-riesgo/register-riesgo.component';
import { UpdateRiesgoComponent } from './components/Riesgo/update-riesgo/update-riesgo.component';
import { ListSegmentoComponent } from './components/segmento/list-segmento/list-segmento.component';
import { RegisterSegmentoComponent } from './components/segmento/register-segmento/register-segmento/register-segmento.component';
import { UpdateSegmentoComponent } from './components/segmento/update-segmento/update-segmento/update-segmento.component';
import { ListVariableComponent } from './components/variable/list-variable/list-variable/list-variable.component';
import { RegisterVariableComponent } from './components/variable/register-variable/register-variable/register-variable.component';
import { UpdateVariableComponent } from './components/variable/update-variable/update-variable/update-variable.component';

const routes: Routes = [
  {path: 'riesgos', component: ListRiesgoComponent},
  {path: '', redirectTo:'riesgos', pathMatch: 'full'},
  {path: 'register-riesgo', component: RegisterRiesgoComponent},
  {path: 'update-riesgo/:id', component: UpdateRiesgoComponent},
  {path: 'list-segmento', component: ListSegmentoComponent},
  {path: 'register-segmento', component: RegisterSegmentoComponent},
  {path: 'update-segmento/:id', component: UpdateSegmentoComponent},
  {path: 'list-variable', component: ListVariableComponent},
  {path: 'register-variable', component: RegisterVariableComponent},
  {path: 'update-variable/:id', component: UpdateVariableComponent},
  {path: 'list-perfilVariable', component: ListPerfilVariableComponent},
  {path: 'list-perfil', component: ListPerfilComponent},
  {path: 'list-fuente-informacion', component: ListFuenteInformacionComponent},

  {path: 'navbar' , component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
