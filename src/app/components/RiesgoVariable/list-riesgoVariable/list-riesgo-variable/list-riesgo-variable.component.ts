import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { RiesgoVariableService } from 'src/app/services/riesgoVariable-service/riesgo-variable.service';
import swal from 'sweetalert2';
import { RiesgoVariable } from '../../RiesgoVariableModel/riesgo-variable';

@Component({
  selector: 'app-list-riesgo-variable',
  templateUrl: './list-riesgo-variable.component.html',
  styleUrls: ['./list-riesgo-variable.component.css']
})
export class ListRiesgoVariableComponent implements OnInit {

  riesgoVariables: RiesgoVariable[];
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;

  constructor(private riesgoVariableService: RiesgoVariableService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerRiesgoVariables();
  }

  private obtenerRiesgoVariables(){
    this.riesgoVariableService.getRiesgoVariable().subscribe(date => {
      this.riesgoVariables = date;
      console.log(date)
    });
  }

  actualizarRiesgoVariable(id: number){
    this.router.navigate(['update-riesgoVariable', id]);
  }

  agregarBoton(){
    this.router.navigate(['register-riesgoVariable']);
  }

  eliminarRiesgoVariable(id:number){
    swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar la Matriz Riesgo Variable",
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
          this.riesgoVariableService.deleteRiesgoVariable(id).subscribe(date => {
            console.log(date);
            this.obtenerRiesgoVariables();
            swal(
              'Eliminado',
              'Matriz Riesgo Variable con id ' + id + ' ha sido eliminado con exito',
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
