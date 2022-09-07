import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.models';

@Component({
  selector: 'app-epiphany',
  templateUrl: './epiphany.component.html',
  styleUrls: ['./epiphany.component.css']
})
export class EpiphanyComponent implements OnInit {
  epiphany = new Card (2, 'EPIPHANY', 'Es una composición del clásico género épico. Demostrando un gran despliegue por las posibilidad timbricas en una orquesta', '../assets/img/cards/epiphany.jpg');
  constructor() { }

  ngOnInit(): void {
  }

}
