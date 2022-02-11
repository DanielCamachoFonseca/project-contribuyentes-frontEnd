import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Riesgo } from 'src/app/components/Riesgo/RiesgoModel/riesgo';
import { Segmento } from 'src/app/components/segmento/SegmentoModel/segmento';
import { Variable } from 'src/app/components/variable/VariableModel/variable';
import { RiesgoVariableService } from 'src/app/services/riesgoVariable-service/riesgo-variable.service';
import swal from 'sweetalert2';
import { RiesgoVariable } from '../../RiesgoVariableModel/riesgo-variable';

@Component({
  selector: 'app-update-riesgo-variable',
  templateUrl: './update-riesgo-variable.component.html',
  styleUrls: ['./update-riesgo-variable.component.css']
})
export class UpdateRiesgoVariableComponent implements OnInit {

  id: number;
  riesgoVariable: RiesgoVariable = new RiesgoVariable();
  riesgos: Riesgo[] = [];
  variables: Variable[] = [];
  segmentos: Segmento[] = [];

  constructor(private riesgoVariableService: RiesgoVariableService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Editar();
    this.riesgoVariableService.ListRiesgos()
        .subscribe(response => this.riesgos = response)
    this.riesgoVariableService.ListVariables()
        .subscribe(response => this.variables = response)
    this.riesgoVariableService.ListSegmentos()
        .subscribe(response => this.segmentos = response)
  }

  Editar() {
    this.id = this.route.snapshot.params['id'];
    this.riesgoVariableService.obtenerRiesgoVariablePorId(this.id).subscribe(
      (date) => {
        this.riesgoVariable = date;
      }, (error) => console.log(error)
    );
  }

  Actualizar() {
    this.riesgoVariableService.actualizarRiesgoVariable(this.riesgoVariable.id_matriz_riesgo_variable, this.riesgoVariable).subscribe(
      (date) => {
        this.redirectUserListRiesgoVariable();
      }, error => console.log(error)
    )
  }

  redirectUserListRiesgoVariable() {
    this.router.navigate(['list-riesgoVariable']);
    swal('Actualizado',
    '¡Matriz Riesgo Variable ha sido actualizado con exito!',
    'success');
  }

  compararRiesgo(o1: Riesgo, o2: Riesgo): boolean {
    if(o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id_matriz_riesgo == o2.id_matriz_riesgo;
  }

  compararVariable(o1: Variable, o2: Variable): boolean {
    if(o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id_variable == o2.id_variable;
  }

  compararSegmento(o1: Segmento, o2: Segmento): boolean {
    if(o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id_segmento == o2.id_segmento;
  }

}



