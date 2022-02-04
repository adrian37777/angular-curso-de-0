import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.services';

interface Personaje{
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: '',
    poder:0
  }


  constructor(){


  }


}
