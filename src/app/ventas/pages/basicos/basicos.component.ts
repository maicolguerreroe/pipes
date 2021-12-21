import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'maicol';
  nombreUpper: string = 'MAICOL';
  nombreCompleto: string = 'MaIcoL GueRRErO';

  fecha: Date = new Date(); // el dia de hoy
}
