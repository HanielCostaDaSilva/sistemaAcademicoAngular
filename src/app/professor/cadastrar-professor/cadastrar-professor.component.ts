import { Component } from '@angular/core';
import { PROFESSORES} from 'src/app/shared/modelo/PROFESSORES';
import Professor from 'src/app/shared/modelo/Professor';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.css']
})
export class CadastrarProfessorComponent {
  nome: string="";
  idade !: number;
  matricula: string="";
  
  nomeButton: string="Cadastrar";
  professores:Professor[] = PROFESSORES;  
  
  cadastrar():void{
  const ProfessorEncontrado :Professor[] = this.professores.filter( (Professor:Professor) => 
  {return Professor.nome == this.nome } );

  if (ProfessorEncontrado.length > 0){
    alert("Professor já cadastrado!");
    return
  }
  this.professores.push(new Professor( this.matricula, this.nome, this.idade));
  }
}
