import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Riesgo } from '../RiesgoModel/riesgo';
import { RiesgoService } from 'src/app/services/riesgo-service/riesgo.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-riesgo',
  templateUrl: './list-riesgo.component.html',
  styleUrls: ['./list-riesgo.component.css']
})
export class ListRiesgoComponent implements OnInit {

  riesgos: Riesgo[];
  pageSize = 8;
  desde:number = 0;
  hasta:number = 8;

  constructor(private riesgoService: RiesgoService, private router: Router) {

   }

  ngOnInit(): void {
    this.obtenerRiesgos();
  }

  actualizarRiesgo(id:number){
    this.router.navigate(['update-riesgo',id]);
  }

  agregarBoton(){
    this.router.navigate(['register-riesgo']);
  }

  private obtenerRiesgos(){
    this.riesgoService.ListRiesgos().subscribe(date => {
      this.riesgos = date;
    });
  }

  eliminarRiesgo(id:number){
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar la Matriz de riesgo",
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
          this.riesgoService.deleteRiesgo(id).subscribe(date => {
            console.log(date);
            this.obtenerRiesgos();
            swal(
              'Eliminado',
              'Matriz de Riesgo con id ' + id + ' ha sido eliminado con exito',
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




