export interface Ipessoa{
	getNome();
	getIdade();
}


import {Pessoa} from './pessoa';
export class Aluno extends Pessoa implements Ipessoa{

	public getNome():string{
		return this.nome;
	}
	public getIdade():number{
		return this.idade;
	}


	constructor(idade:number,nome:string) {
		super(idade,nome);
	}
}
