import { CpfPipe } from './pipes/pipe/cpf.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import {UsuarioModule} from './usuario/usuario.module';
import {ProfessorModule} from './professor/professor.module'
import {DisciplinaModule} from './disciplina/disciplina.module'
import { MaterialModule } from './material/material.module';
import {LayoutModule} from './layout/layout.module';
@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        MaterialModule,
        UsuarioModule,
        LayoutModule,
        MaterialModule
        
    ]
})
export class AppModule { }
