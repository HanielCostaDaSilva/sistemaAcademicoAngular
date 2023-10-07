import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarProfessorComponent } from './cadastrar-professor/cadastrar-professor.component';
import { ListarProfessorComponent } from './listar-professor/listar-professor.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CadastrarProfessorComponent,
    ListarProfessorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CadastrarProfessorComponent,
    ListarProfessorComponent
  ]
})
export class ProfessorModule { }
