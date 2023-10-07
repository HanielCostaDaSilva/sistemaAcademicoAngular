import { Component } from '@angular/core';
import {PROFESSORES} from '../../shared/modelo/PROFESSORES'
import Professor from '../../shared/modelo/Professor';

@Component({
  selector: 'app-listar-professor',
  templateUrl: './listar-professor.component.html',
  styleUrls: ['./listar-professor.component.css']
})

export class ListarProfessorComponent {
  
  professores:Professor[]= PROFESSORES;

  excluir(professor:Professor){

    const index = this.professores.indexOf(professor);
    this.professores.slice(index,1);
  }


}
