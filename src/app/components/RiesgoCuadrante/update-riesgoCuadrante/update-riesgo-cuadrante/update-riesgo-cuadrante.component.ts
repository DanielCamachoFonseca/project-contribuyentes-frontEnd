import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Riesgo } from 'src/app/components/Riesgo/RiesgoModel/riesgo';
import { RiesgoCuadranteService } from 'src/app/services/riesgoCuadrante-service/riesgo-cuadrante.service';
import swal from 'sweetalert2';
import { RiesgoCuadrante } from '../../RiesgoCuadranteModel/riesgo-cuadrante';

@Component({
  selector: 'app-update-riesgo-cuadrante',
  templateUrl: './update-riesgo-cuadrante.component.html',
  styleUrls: ['./update-riesgo-cuadrante.component.css']
})
export class UpdateRiesgoCuadranteComponent implements OnInit {

  id: number;
  riesgoCuadrante: RiesgoCuadrante = new RiesgoCuadrante();
  riesgos : Riesgo[] = [];

  constructor(private riesgoCuadranteService: RiesgoCuadranteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.Editar();
    this.riesgoCuadranteService.ListRiesgos()
        .subscribe(response => this.riesgos = response)
  }

  Editar() {
    this.id = this.route.snapshot.params['id'];
    this.riesgoCuadranteService.obtenerRiesgoCuadrantesPorId(this.id).subscribe(
      (date) => {
        this.riesgoCuadrante = date;
      }, (error) => console.log(error)
    );
  }

  Actualizar() {
    this.riesgoCuadranteService.actualizarRiesgoCuadrante(this.riesgoCuadrante.id_matriz_riesgo_cuadrante, this.riesgoCuadrante).subscribe(
      (date) => {
        this.redirectUserListRiesgoCuadrante();
      }, error => console.log(error)
    );
  }

  redirectUserListRiesgoCuadrante() {
    this.router.navigate(['list-riesgoCuadrante']);
    swal(
      'Matriz Cuadrante actualizado',
      `${this.riesgoCuadrante.id_matriz_riesgo_cuadrante} ha sido actualizado con exito`,
      `success`
    );
  }

  compararRiesgo(o1: Riesgo, o2: Riesgo): boolean {
    if(o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id;
  }
}
