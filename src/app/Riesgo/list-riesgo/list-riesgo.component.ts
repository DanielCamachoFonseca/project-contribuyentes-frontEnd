import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Riesgo } from '../../Riesgo-entity/riesgo';
import { RiesgoService } from '../../services/riesgo.service';

@Component({
  selector: 'app-list-riesgo',
  templateUrl: './list-riesgo.component.html',
  styleUrls: ['./list-riesgo.component.css']
})
export class ListRiesgoComponent implements OnInit {

  riesgos: Riesgo[];

  constructor(private riesgoService: RiesgoService, private router: Router) {

   }

  ngOnInit(): void {
    this.obtenerRiesgos();
  }

  actualizarRiesgo(id:number){
    this.router.navigate(['update-riesgo', id]);
  }

  private obtenerRiesgos(){
    this.riesgoService.ListRiesgos().subscribe(date => {
      this.riesgos = date;
    });
  }

  eliminarRiesgo(id:number){
    this.riesgoService.deleteRiesgo(id).subscribe(date => {
      console.log(date);
      this.obtenerRiesgos();
    });
  }




}
