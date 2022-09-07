import { Component, OnInit } from '@angular/core';
import { QueHacemos } from '../models/card.models';

@Component({
  selector: 'app-que-hacemos',
  templateUrl: './que-hacemos.component.html',
  styleUrls: ['./que-hacemos.component.css']
})
export class QueHacemosComponent implements OnInit {

  public queHacemos: Array<any> = [
      { id: 1, src: "../assets/img/icon/creamos.png", subtitle: "CREAMOS", text: "Permítanos explotar su multimedia con nuestra música más creativa"},
      { id: 2, src: "../assets/img/icon/producimos.png", subtitle: "PRODUCIMOS", text: "Exploramos y llevamos a cabo la mejor alquimia posible."},
      { id: 3, src: "../assets/img/icon/postProducimos.png", subtitle: "POST-PRODUCIMOS", text: "Damos color y llevamos a los niveles adecuados, logrando un excelente sonido."},
      { id: 4, src: "../assets/img/icon/implementamos.png", subtitle: "IMPLEMENTAMOS", text: "Icorporamos la música al videojuego a través de los mejores middleware."},

    ];

  constructor() { 

  }

  ngOnInit(): void {
  }

}
