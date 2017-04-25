import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import {PersonaService} from '../services/persona.service';

@Component({
  selector: 'personas',
  templateUrl: './persona.list.component.html'
})
export class PersonaListComponent implements OnInit {

  pagina: string;
  resultados: Object;

  constructor(private personaService: PersonaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route
      .queryParams
      .subscribe(params => { this.pagina = params['page'] || ''; });
  }

  ngOnInit(): void {
    this.buscarPersonas("0");
  }

  buscarPersonas(page: string): void {
    this.personaService.getPersonas(page).subscribe((res: any) => this.procesaResultados(res));
  }

  procesaResultados(res: any): void {
    this.resultados = null;
    if (res && res.content) {
      this.resultados = res.content;
    }
  }

  detallePersona(id: number): void {
    this.router.navigate(['/personas/', id])
  }
}