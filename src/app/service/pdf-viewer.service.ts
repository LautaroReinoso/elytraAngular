import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PdfViewerService {
  private pdfUrlSubject = new BehaviorSubject<string | null>(null);
  currentPdfUrl$ = this.pdfUrlSubject.asObservable();

  constructor() {
    }

  // Método para establecer la URL del PDF y cargarlo en el canvas
  setPdfUrl(url: string, canvas: HTMLCanvasElement) {
    this.pdfUrlSubject.next(url);  // Notifica a los suscriptores (componente)
    this.loadPdf(url);     // Carga el PDF en el canvas
  }

  // Método para cargar el PDF en el canvas
  loadPdf(url: string) {

  }
}
