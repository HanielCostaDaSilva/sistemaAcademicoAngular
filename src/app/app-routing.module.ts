import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';
import {ListagemUsuariosComponent} from './usuario/listagem-usuarios/listagem-usuarios.component';
import {ListarDisciplinaComponent} from './disciplina/listar-disciplina/listar-disciplina.component'
import {ListarProfessorComponent} from './professor/listar-professor/listar-professor.component'
import { CadastrarDisciplinaComponent } from './disciplina/cadastrar-disciplina/cadastrar-disciplina.component';
import { CadastrarProfessorComponent } from './professor/cadastrar-professor/cadastrar-professor.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'listagemProfessor',
    component: ListarProfessorComponent
  },
  {
    path: 'listagemDisciplina',
    component: ListarDisciplinaComponent
  },
  {
    path: 'cadastrarDisciplina',
    component: CadastrarDisciplinaComponent
  },
  {
    path: 'cadastrarProfessor',
    component: CadastrarProfessorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
