import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Riesgo } from '../RiesgoModel/riesgo';
import { RiesgoService } from 'src/app/services/riesgo-service/riesgo.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-riesgo',
  templateUrl: './register-riesgo.component.html',
  styleUrls: ['./register-riesgo.component.css']
})
export class RegisterRiesgoComponent implements OnInit {

  riesgo : Riesgo = new Riesgo();

  constructor(private riesgoService: RiesgoService, private router: Router) { }

  ngOnInit(): void {

  }

  saveRiesgo(){
    this.riesgoService.registerRiesgo(this.riesgo).subscribe(date => {
      this.goToListRiesgo();
    }, error => console.log(error));
  }

  goToListRiesgo(){
    this.router.navigate(['/riesgos']);
    swal('Agregado',
    '¡Matriz de Riesgo ha sido registrada con exito!',
    'success');
  }

  onSubmit(){
    this.saveRiesgo();
  }

}
