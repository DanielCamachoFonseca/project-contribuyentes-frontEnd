import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListRiesgoComponent } from './components/Riesgo/list-riesgo/list-riesgo.component';
import { RegisterRiesgoComponent } from './components/Riesgo/register-riesgo/register-riesgo.component';
import { UpdateRiesgoComponent } from './components/Riesgo/update-riesgo/update-riesgo.component';

const routes: Routes = [
  {path: 'riesgos', component: ListRiesgoComponent},
  {path: '', redirectTo:'riesgos', pathMatch: 'full'},
  {path: 'register-riesgo', component: RegisterRiesgoComponent},
  {path: 'update-riesgo/:id', component: UpdateRiesgoComponent},
  {path: 'navbar' , component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
