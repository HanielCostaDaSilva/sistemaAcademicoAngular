import { Component } from '@angular/core';
import { DISCIPLINAS } from 'src/app/shared/modelo/DISCIPLINAS';
import Disciplina from 'src/app/shared/modelo/Disciplina';

@Component({
  selector: 'app-cadastrar-disciplina',
  templateUrl: './cadastrar-disciplina.component.html',
  styleUrls: ['./cadastrar-disciplina.component.css']
})
export class CadastrarDisciplinaComponent {
  codigo: number=0;
  nome: string="";
  descricao: string="";
  nomeButton: string="Cadastrar";
  disciplinas:Disciplina[] = DISCIPLINAS;  
  
  cadastrar():void{
  const disciplinaEncontrada :Disciplina[] = this.disciplinas.filter( (disciplina:Disciplina) => 
  {return disciplina.nome == this.nome } );

  if (disciplinaEncontrada.length > 0){
    alert("disciplina já cadastrada!");
    return
  }
  this.disciplinas.push(new Disciplina( this.disciplinas.length, this.nome, this.descricao));
  }
}
