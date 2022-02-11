import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Riesgo } from 'src/app/components/Riesgo/RiesgoModel/riesgo';
import { Segmento } from 'src/app/components/segmento/SegmentoModel/segmento';
import { Variable } from 'src/app/components/variable/VariableModel/variable';
import { RiesgoVariableService } from 'src/app/services/riesgoVariable-service/riesgo-variable.service';
import swal from 'sweetalert2';
import { RiesgoVariable } from '../../RiesgoVariableModel/riesgo-variable';

@Component({
  selector: 'app-register-riesgo-variable',
  templateUrl: './register-riesgo-variable.component.html',
  styleUrls: ['./register-riesgo-variable.component.css']
})
export class RegisterRiesgoVariableComponent implements OnInit {

  riesgoVariable: RiesgoVariable = new RiesgoVariable();
  riesgos : Riesgo[] = [];
  variables : Variable[] = [];
  segmentos : Segmento[] = [];

  constructor(private riesgoVariableService: RiesgoVariableService,
              private router: Router) { }

  ngOnInit(): void {
    this.riesgoVariableService.ListRiesgos()
        .subscribe(response => this.riesgos = response)
    this.riesgoVariableService.ListVariables()
        .subscribe(response => this.variables = response)
    this.riesgoVariableService.ListSegmentos()
        .subscribe(response => this.segmentos = response)

  }

  saveRiesgoVariable(){
    this.riesgoVariableService.registerRiesgoVariable(this.riesgoVariable).subscribe(date => {
      this.goToListRiesgoVariable();
    }, error => console.log(error));
  }

  goToListRiesgoVariable(){
    this.router.navigate(['list-riesgoVariable']);
    swal('Matriz Variable ha sido registrada con exito!');
  }

  onSubmit(){
    this.saveRiesgoVariable();
  }

}
