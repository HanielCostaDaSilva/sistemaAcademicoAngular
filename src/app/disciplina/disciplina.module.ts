import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarDisciplinaComponent } from './cadastrar-disciplina/cadastrar-disciplina.component';
import { ListarDisciplinaComponent } from './listar-disciplina/listar-disciplina.component';
import { AppModule } from '../app.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CadastrarDisciplinaComponent,
    ListarDisciplinaComponent,
  ],
  imports: [
    AppModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListarDisciplinaComponent,
    CadastrarDisciplinaComponent
  ]
})
export class DisciplinaModule { }
