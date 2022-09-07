import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.models';

@Component({
  selector: 'app-pack-rpg',
  templateUrl: './pack-rpg.component.html',
  styleUrls: ['./pack-rpg.component.css']
})
export class PackRPGComponent implements OnInit {
  rpg = new Card (2, 'MUSIC PACK RPG', 'Es un pack de música para videojuegos RPG. Compuesto para diversos escenarios y posibles y distintos estados de juego (batalla y exploración). Posee 7 tracks.', '../assets/img/cards/packMusicRPG.jpg');
  constructor() { }

  ngOnInit(): void {
  }

}
