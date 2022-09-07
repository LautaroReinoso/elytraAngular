import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.models';
@Component({
  selector: 'app-ninias',
  templateUrl: './ninias.component.html',
  styleUrls: ['./ninias.component.css']
})
export class NiniasComponent implements OnInit {

  niniasDeAyohuma = new Card (1, 'NIÑAS DE AYOHUMA', 'María, protagonista de esta historia, debe lograr la independencia de argentina. Debera a travesar varias batallas hasta llegar a su rey.', '../assets/img/cards/niniasDeAyohuma.jpg' );
  constructor() { }

  ngOnInit(): void {
  }

}
