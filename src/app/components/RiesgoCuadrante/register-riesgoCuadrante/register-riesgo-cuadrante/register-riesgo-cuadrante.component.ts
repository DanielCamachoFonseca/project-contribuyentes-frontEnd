import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Riesgo } from 'src/app/components/Riesgo/RiesgoModel/riesgo';
import { RiesgoCuadranteService } from 'src/app/services/riesgoCuadrante-service/riesgo-cuadrante.service';
import swal from 'sweetalert2';
import { RiesgoCuadrante } from '../../RiesgoCuadranteModel/riesgo-cuadrante';

@Component({
  selector: 'app-register-riesgo-cuadrante',
  templateUrl: './register-riesgo-cuadrante.component.html',
  styleUrls: ['./register-riesgo-cuadrante.component.css']
})
export class RegisterRiesgoCuadranteComponent implements OnInit {

  riesgoCuadrante : RiesgoCuadrante = new RiesgoCuadrante();
  riesgos : Riesgo[] = [];

  constructor(private riesgoCuadranteService: RiesgoCuadranteService,
              private router: Router) { }

  ngOnInit(): void {
    this.riesgoCuadranteService.ListRiesgos()
        .subscribe(response => this.riesgos = response)
  }

  saveRiesgoCuadrante(){
    this.riesgoCuadranteService.registerRiesgoCuadrante(this.riesgoCuadrante).subscribe(date => {
      this.goToListRiesgoCuadrante();
    }, error => console.log(error));
  }

  goToListRiesgoCuadrante(){
    this.router.navigate(['/list-riesgoCuadrante']);
    swal('Matriz Cuadrante registrado', `${this.riesgoCuadrante.numero_cuadrante} ha sido registrado!`);
  }

  onSubmit(){
    this.saveRiesgoCuadrante();
  }

}
