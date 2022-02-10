import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { RiesgoCuadranteService } from 'src/app/services/riesgoCuadrante-service/riesgo-cuadrante.service';
import swal from 'sweetalert2';
import { RiesgoCuadrante } from '../../RiesgoCuadranteModel/riesgo-cuadrante';

@Component({
  selector: 'app-list-riesgo-cuadrante',
  templateUrl: './list-riesgo-cuadrante.component.html',
  styleUrls: ['./list-riesgo-cuadrante.component.css']
})
export class ListRiesgoCuadranteComponent implements OnInit {

  riesgoCuadrantes: RiesgoCuadrante[];
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;

  constructor(private riesgoCuadranteService: RiesgoCuadranteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerRiesgoCuadrantes();
  }

  private obtenerRiesgoCuadrantes(){
    this.riesgoCuadranteService.getRiesgoCuadrantes().subscribe(date => {
      this.riesgoCuadrantes = date;
      console.log(date);
    });
  }

  actualizarRiesgoCuadrante(id:number){
    this.router.navigate(['update-riesgoCuadrante', id]);
  }

  agregarBoton(){
    this.router.navigate(['register-riesgoCuadrante']);
  }

  eliminarRiesgoCuadrante(id:number){
    swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar la Matriz Riesgo Cuadrante",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '3085d6',
        cancelButtonColor: 'd33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        if(result.value){
          this.riesgoCuadranteService.deleteRiesgoCuadrante(id).subscribe(date => {
            console.log(date);
            this.obtenerRiesgoCuadrantes();
            swal(
              'Eliminado',
              'La Matriz Riesgo Cuadrante con id ' + id + ' ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
    }

  cambiarPagina(e:PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

}
