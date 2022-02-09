import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilVariableService } from 'src/app/services/perfilVariable-service/perfil-variable.service';
import { PerfilVariable } from '../../PerfilVariableModel/perfil-variable';

@Component({
  selector: 'app-list-perfil-variable',
  templateUrl: './list-perfil-variable.component.html',
  styleUrls: ['./list-perfil-variable.component.css']
})
export class ListPerfilVariableComponent implements OnInit {

  perfilVariables: PerfilVariable[];
  pageSize = 5;
  desde:number = 0;
  hasta:number = 5;

  constructor(private perfilVariableService: PerfilVariableService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.obtenerPerfilVariables();
  }

  private obtenerPerfilVariables(){
    this.perfilVariableService.ListPerfilVariable().subscribe(date => {
      this.perfilVariables = date;
    });
  }

  cambiarPagina(e:PageEvent) {
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

}
