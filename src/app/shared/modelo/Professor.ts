import Disciplina from './Disciplina';

export default class Professor{
    
    private __matricula:string;
    private __nome:string;
    private __idade:number;
    private __disciplinasMinistrante:Disciplina[] | undefined;
    
    constructor(matricula: string, nome: string, idade:number) {
        this.__matricula =matricula;
        this.__nome =nome;
        this.__idade = idade;
    }
    
    get matricula(){
        return this.__matricula;
    }
    get nome(){
        return this.__nome;
    }
    get idade(){
        return this.__idade;
    }
    
    get disciplinasMinistrante(){
        return this.__disciplinasMinistrante;
    }

}