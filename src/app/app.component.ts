import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { teste } from './Models/teste.model';
import { TesteService } from './teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testeAcordion';

  conteudoList$!:Observable<any[]>; 
   cursos: teste[] = []; 
  formulario: any;

  constructor(private service : TesteService) { }

  ngOnInit(): void {
    this.service.PegarCursos().subscribe((resultado) => (this.cursos = resultado));
  }

  
}
