import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { VariableService } from 'src/app/services/variable-service/variable.service';
import swal from 'sweetalert2';
import { Variable } from '../../VariableModel/variable'

@Component({
  selector: 'app-list-variable',
  templateUrl: './list-variable.component.html',
  styleUrls: ['./list-variable.component.css']
})
export class ListVariableComponent implements OnInit {

  variables: Variable[];
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;


  constructor(private variableService: VariableService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerVariables();
  }

  actualizarVariable(id:number){
    this.router.navigate(['update-variable', id]);
  }

  agregarBoton(){
    this.router.navigate(['register-variable']);
  }

  private obtenerVariables(){
    this.variableService.ListVariable().subscribe(date => {
      this.variables = date;
    });
  }

  eliminarVariable(id:number){
    swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar la Matriz de variable",
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
          this.variableService.deleteVariable(id).subscribe(date => {
            console.log(date);
            this.obtenerVariables();
            swal(
              'Eliminado',
              'La matriz de variable con id ' + id + ' ha sido eliminado con exito',
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
