import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPerfil = [];
    for(let perfil of value){
      if(perfil.nit.indexOf(arg) > -1){
        resultPerfil.push(perfil);
      };
    };
    return resultPerfil;
  }
}
