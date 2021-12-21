import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nselect
  nombre: string = 'Maicol';
  genero: string = 'femenino';

  invitacionObj = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  //i18nplural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clientesMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }
  cambiarPersona() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }
  borarrarCliente() {
    this.clientes.pop();
  }

  //keyValue pipe
  persona = {
    nombre: 'Maicol',
    edad: 28,
    direccion: 'Macara, Ecuador'
  }

  //json pipe

  heroes = [
    {
      nombre: 'Maicol',
      vuela: true
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
    {
      nombre: 'Superman',
      vuela: true
    }
  ]

  //async pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}


