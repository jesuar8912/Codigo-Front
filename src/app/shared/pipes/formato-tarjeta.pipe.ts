import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoTarjeta'
})
export class FormatoTarjetaPipe implements PipeTransform {

  transform(val: String): String {
    return val.substring(0, 4) + "-" + val.substring(4, 8) + "-" + val.substring(8, 12) + "-" + val.substring(12, 16);
  }

}
