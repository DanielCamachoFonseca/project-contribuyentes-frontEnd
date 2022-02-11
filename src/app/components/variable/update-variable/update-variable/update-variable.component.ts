import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VariableService } from 'src/app/services/variable-service/variable.service';
import swal from 'sweetalert2';
import { Variable } from '../../VariableModel/variable';

@Component({
  selector: 'app-update-variable',
  templateUrl: './update-variable.component.html',
  styleUrls: ['./update-variable.component.css']
})
export class UpdateVariableComponent implements OnInit {

  id: number;
  variable: Variable = new Variable();

  constructor(
    private variableService: VariableService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    this.id = this.route.snapshot.params['id'];
    this.variableService.obtenerVariablePorId(this.id).subscribe(date => {
      this.variable = date;
      console.log(date)
    }, error => console.log(error));
  }

  Actualizar(){
    this.variableService.actualizarVariable(this.variable.id_variable, this.variable).subscribe(date => {
      this.redirectToList();
    }, error => console.log(error));
  }

  redirectToList() {
    this.router.navigate(['/list-variable']);
    swal(
      'Matriz de variable actualizado',
      `${this.variable.nombre} ha sido actualizado con exito`,
      `success`
    );
  }

}
