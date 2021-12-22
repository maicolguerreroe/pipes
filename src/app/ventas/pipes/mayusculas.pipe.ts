import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(value: string, enMayusculas: boolean = true): string {
    if (enMayusculas) {
      value = value.toUpperCase();
    } else {
      value = value.toLowerCase();
    }

    return value;
  }
}
