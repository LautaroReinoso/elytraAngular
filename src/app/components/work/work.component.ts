import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  activeTab: string = 'compositions';

  // Función para cambiar la pestaña activa
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
