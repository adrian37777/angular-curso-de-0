import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  // @Input('data') personajes: Personaje[] =[];

  get personajes():Personaje[]{

    return this.dbzService.personajes


  }

  constructor(private dbzService: DbzService){

  }

}
