import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Doctor Strange', 'Thor', 'Hulk', 'Capitan America', 'Iron Man', 'Spiderman']
  heroeBorrado: string =  ''
  borrarHeroe() {
   
  this.heroeBorrado = this.heroes.shift() || "";
  
  }
}
