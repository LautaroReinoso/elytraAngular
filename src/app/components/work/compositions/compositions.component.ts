import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compositions',
  templateUrl: './compositions.component.html',
  styleUrls: ['./compositions.component.css']
})
export class CompositionsComponent implements OnInit {


  

  public allProjects = [
    {
      title: 'Project 1',
      description: 'Description 1',
      imageUrl: '../../../../../assets/img/projects/1.webp',
      pdfUrl: '../../../../../assets/pdfs/When.pdf',
    },
    {
      title: 'Project 2',
      description: 'Description 2',
      imageUrl: '../../../../../assets/img/projects/2.webp',
       pdfUrl: '../../../../../assets/pdfs/When Christmas Comes To Town.pdf'
    },
    {
      title: 'Project 3',
      description: 'Description 3',
      imageUrl:'../../../../../assets/img/projects/3.webp',
       pdfUrl: '../../../../../assets/pdfs/When Christmas Comes To Town.pdf'
    },
    {
      title: 'Project 4',
      description: 'Description 4',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/5335b70d-ad0e-47cb-9af3-b600daae7c9a.png',
       pdfUrl: '../../../../../assets/pdfs/When Christmas Comes To Town.pdf'
    },
    {
      title: 'Project 5',
      description: 'Description 5',
      imageUrl: 'https://cdn.usegalileo.ai/sdxl10/5335b70d-ad0e-47cb-9af3-b600daae7c9a.png',
       pdfUrl: '../../../../../assets/pdfs/When Christmas Comes To Town.pdf'
    },
  ]
  public projectsToShow = this.allProjects.slice(0, 3);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Cargar el PDF para un proyecto específico
  loadPdf(pdf: number) {

    console.log(pdf)
  }

  seeMore() {
    this.router.navigate(['/all-projects']);
  }
}