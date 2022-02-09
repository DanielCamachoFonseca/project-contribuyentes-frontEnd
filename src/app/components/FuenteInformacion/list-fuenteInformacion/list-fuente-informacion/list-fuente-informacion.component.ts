import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { FuenteInformacionService } from 'src/app/services/fuenteInformacion-service/fuente-informacion.service';
import { FuenteInformacion } from '../../fuenteInformacionModel/fuente-informacion';

@Component({
  selector: 'app-list-fuente-informacion',
  templateUrl: './list-fuente-informacion.component.html',
  styleUrls: ['./list-fuente-informacion.component.css']
})
export class ListFuenteInformacionComponent implements OnInit {

  fuentesInformacion: FuenteInformacion[];
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;

  constructor(private FuenteInformacionService: FuenteInformacionService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.obtenerFuenteInformacion();
  }

  private obtenerFuenteInformacion(){
    this.FuenteInformacionService.ListFuenteInformacion().subscribe( date => {
      this.fuentesInformacion = date;
    });
  }

  cambiarPagina(e:PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

}
