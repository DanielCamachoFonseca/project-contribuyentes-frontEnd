import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SegmentoService } from 'src/app/services/segmento-service/segmento.service';
import swal from 'sweetalert2';
import { Segmento } from '../../SegmentoModel/segmento';

@Component({
  selector: 'app-update-segmento',
  templateUrl: './update-segmento.component.html',
  styleUrls: ['./update-segmento.component.css'],
})
export class UpdateSegmentoComponent implements OnInit {
  id: number;
  segmento: Segmento = new Segmento();

  constructor(
    private segmentoService: SegmentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    this.id = this.route.snapshot.params['id'];
    this.segmentoService.obtenerSegmentoPorId(this.id).subscribe(
      (date) => {
        this.segmento = date;
      },
      error => console.log(error)
    );
  }

  Actualizar() {
    this.segmentoService
      .actualizarSegmento(this.segmento.id_segmento, this.segmento)
      .subscribe(
        (date) => {
          this.redirectToList();
        },
        error => console.log(error)
      );
  }

  redirectToList() {
    this.router.navigate(['/list-segmento']);
    swal('Actualizado',
    '¡Segmento ha sido actualizado con exito!',
    'success');
  }
}
