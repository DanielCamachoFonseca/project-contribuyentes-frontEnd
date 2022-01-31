import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRiesgoComponent } from './Riesgo/list-riesgo/list-riesgo.component';
import { RegisterRiesgoComponent } from './Riesgo/register-riesgo/register-riesgo.component';
import { UpdateRiesgoComponent } from './Riesgo/update-riesgo/update-riesgo.component';

const routes: Routes = [
  {path: 'riesgos', component: ListRiesgoComponent},
  {path: '', redirectTo:'riesgos', pathMatch: 'full'},
  {path: 'register-riesgo', component: RegisterRiesgoComponent},
  {path: 'update-riesgo/:id', component: UpdateRiesgoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
