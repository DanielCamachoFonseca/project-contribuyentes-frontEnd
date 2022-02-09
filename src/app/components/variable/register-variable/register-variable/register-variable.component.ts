import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariableService } from 'src/app/services/variable-service/variable.service';
import swal from 'sweetalert2';
import { Variable } from '../../VariableModel/variable';

@Component({
  selector: 'app-register-variable',
  templateUrl: './register-variable.component.html',
  styleUrls: ['./register-variable.component.css']
})
export class RegisterVariableComponent implements OnInit {

  variable : Variable = new Variable();

  constructor(private variableService: VariableService, private router: Router) { }

  ngOnInit(): void {

  }

  saveVariable(){
    this.variableService.registerVariable(this.variable).subscribe(date => {
      this.goToListVariable();
    }, error => console.log(error));
  }

  goToListVariable(){
    this.router.navigate(['list-variable']);
    swal('Matriz de Variable registrado', `${this.variable.nombre} ha sido registrado!`);
  }

  onSubmit(){
    this.saveVariable();
  }

}
