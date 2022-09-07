import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isMenuOpen = true;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
