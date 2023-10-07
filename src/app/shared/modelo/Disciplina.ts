import { Usuario } from './usuario';
import Professor from './Professor';

export default class Disciplina {

    private __codigo: number;
    private __nome: string;
    private __listaAlunos: Usuario[] = [];
    private __descricao: string;
    private __professor: Professor = new Professor('','',0,);

    constructor(codigo: number, nome: string,descricao: string) {
        this.__codigo =codigo;
        this.__nome =nome;
        this.__descricao =descricao;        
    }

    get codigo(){
        return this.__codigo;
    }
    get nome(){
        return this.__nome;
    }
    get listaAlunos(){
        return this.__listaAlunos;
    }
     get professor(){
        return this.__professor;
    } 

    get descricao(){
        return this.__descricao;
    }
    
    set codigo(newCodigo:number){
        this.__codigo = newCodigo;  
    }

    set nome(newNome:string){
        this.__nome = newNome;  
    }

    set professor(newProfessor:Professor){
        this.__professor = newProfessor;  
    }
 
    set descricao(newDescricao:string){
        this.__descricao==newDescricao;

    }
}