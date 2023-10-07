import { Component } from '@angular/core';
import {DISCIPLINAS} from '../../shared/modelo/DISCIPLINAS'
import Disciplina from '../../shared/modelo/Disciplina';

@Component({
  selector: 'app-listar-disciplina',
  templateUrl: './listar-disciplina.component.html',
  styleUrls: ['./listar-disciplina.component.css']
})

export class ListarDisciplinaComponent {
  
  disciplinas:Disciplina[]= DISCIPLINAS;

  excluir(disciplina:Disciplina){

    const index = this.disciplinas.indexOf(disciplina);
    this.disciplinas.slice(index,1);
  }


}
