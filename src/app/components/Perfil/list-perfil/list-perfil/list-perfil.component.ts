import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from 'src/app/services/perfil-service/perfil.service';
import { Perfil } from '../../PerfilModel/perfil';

@Component({
  selector: 'app-list-perfil',
  templateUrl: './list-perfil.component.html',
  styleUrls: ['./list-perfil.component.css']
})
export class ListPerfilComponent implements OnInit {

  perfiles: Perfil[];
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;

  constructor(private perfilService: PerfilService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.obtenerPerfil();
  }

  private obtenerPerfil(){
    this.perfilService.ListPerfil().subscribe(date => {
      this.perfiles = date;
    });
  }

  cambiarPagina(e:PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

}
