import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Riesgo } from 'src/app/Riesgo-entity/riesgo';
import { RiesgoService } from 'src/app/services/riesgo.service';

@Component({
  selector: 'app-update-riesgo',
  templateUrl: './update-riesgo.component.html',
  styleUrls: ['./update-riesgo.component.css']
})
export class UpdateRiesgoComponent implements OnInit {

  riesgo : Riesgo = new Riesgo();

  constructor(private riesgoService: RiesgoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveRiesgo(){
    this.riesgoService.updateRiesgo(this.riesgo.id, this.riesgo).subscribe(date => {
      console.log(date);
      this.goToListRiesgo();
    }, error => console.log(error));
  }

  goToListRiesgo(){
    this.router.navigate(['/riesgos']);
  }

  onSubmit(){
    this.saveRiesgo();
  }

}
