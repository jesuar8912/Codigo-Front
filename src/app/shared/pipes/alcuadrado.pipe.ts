import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcuadrado'
})
export class AlcuadradoPipe implements PipeTransform {

  transform(val: number): number {
    return Math.pow(val,2);
  }

}
