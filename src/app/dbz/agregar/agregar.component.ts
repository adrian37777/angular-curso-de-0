import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})
export class agregarComponent {


  @Input('nuevo') nuevo: Personaje = {
    nombre: 'Goku',
    poder: 0,
  };

  constructor(private dbzService: DbzService){}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = { nombre: '', poder: 0 };
  }
}
