import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegmentoService } from 'src/app/services/segmento-service/segmento.service';
import swal from 'sweetalert2';
import { Segmento } from '../../SegmentoModel/segmento';

@Component({
  selector: 'app-register-segmento',
  templateUrl: './register-segmento.component.html',
  styleUrls: ['./register-segmento.component.css']
})
export class RegisterSegmentoComponent implements OnInit {

  segmento : Segmento = new Segmento();

  constructor(private segmentoService: SegmentoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveSegmento(){
    this.segmentoService.registerSegmento(this.segmento).subscribe(data => {
      this.goToListSegmento();
    }, error => console.log(error));
  }

  goToListSegmento(){
    this.router.navigate(['list-segmento']);
    swal('Agregado',
    '¡Segmento ha sido registrado con exito!',
    'success');
  }

  onSubmit(){
    this.saveSegmento();
  }

}
