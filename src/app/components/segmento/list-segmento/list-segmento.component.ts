import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { SegmentoService } from 'src/app/services/segmento-service/segmento.service';
import swal from 'sweetalert2';
import { Segmento } from '../SegmentoModel/segmento';

@Component({
  selector: 'app-list-segmento',
  templateUrl: './list-segmento.component.html',
  styleUrls: ['./list-segmento.component.css']
})
export class ListSegmentoComponent implements OnInit {

  segmentos: Segmento[];
  pageSize = 8;
  desde:number = 0;
  hasta:number = 8;

  constructor(private segmentoService: SegmentoService, private router: Router, private _route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.obtenerSegmentos();
  }

  actualizarSegmento(id:number){
    this.router.navigate(['update-segmento',id]);
  }

  agregarBoton(){
    this.router.navigate(['register-segmento']);
  }

  private obtenerSegmentos(){
    this.segmentoService.ListSegmentos().subscribe(date => {
      this.segmentos = date;
    });
  }

  eliminarSegmento(id:number){
    swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar la Matriz de segmento",
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
          this.segmentoService.deleteSegmento(id).subscribe(date => {
            console.log(date);
            this.obtenerSegmentos();
            swal(
              'Eliminado',
              'Segmento con id ' + id + ' ha sido eliminado con exito',
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
