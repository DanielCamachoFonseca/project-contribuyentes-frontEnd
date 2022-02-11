import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Riesgo } from '../RiesgoModel/riesgo';
import { RiesgoService } from 'src/app/services/riesgo-service/riesgo.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-riesgo',
  templateUrl: './update-riesgo.component.html',
  styleUrls: ['./update-riesgo.component.css'],
})
export class UpdateRiesgoComponent implements OnInit {
  id: number;
  riesgo: Riesgo = new Riesgo();

  constructor(
    private riesgoService: RiesgoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    this.id = this.route.snapshot.params['id'];
    this.riesgoService.obtenerRiesgoPorId(this.id).subscribe(
      (date) => {
        this.riesgo = date;
      },
      (error) => console.log(error)
    );
  }

  Actualizar() {
    this.riesgoService.actualizarRiesgo(this.riesgo.id_matriz_riesgo, this.riesgo).subscribe(
      (date) => {
        this.redirectUserList();
      },
      (error) => console.log(error)
    );
  }

  //Redirección a lista de usuarios
  redirectUserList() {
    this.router.navigate(['/riesgos']);
    swal('Actualizado',
    'Matriz de Riesgo ha sido actualizada con exito!',
    'success');
  }
}
