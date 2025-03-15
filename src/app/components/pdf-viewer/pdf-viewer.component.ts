import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PdfViewerService } from '../../../app/service/pdf-viewer.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
@ViewChild('pdfCanvas', { static: true }) pdfCanvas!: ElementRef<HTMLCanvasElement>;
  constructor(private pdfViewerService:PdfViewerService) {}

  ngOnInit(): void {
    // Suscribirse al servicio para obtener la URL del PDF
    this.pdfViewerService.currentPdfUrl$.subscribe(url => {
      if (url && this.pdfCanvas) {
        this.pdfViewerService.loadPdf(url, this.pdfCanvas.nativeElement);
      }
    });
  }
}