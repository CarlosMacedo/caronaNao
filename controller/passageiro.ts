export interface Ipassageiro{

	//medotos da interface
	celular:string;
	divida:number;
	nome:string;

}

export class Passageiro implements Ipassageiro{
	
	//Atributos basicos da class
	private _divida:number=0.0;
	private _id;


	//construtor
	constructor(private _nome:string,private _celular:string,id?:number,divida?:number){
		this._divida=divida; //atributo não obrigatorio pq em alguns objetos eu já recebo a divida e em outros ele não recebe sendo assim fica opcional iniciar esse valor ou não, caso não inicie ele já é predefinido com 0.0
		this._id=id;//outro atributo opcional, pq quando recuperamos os dados no banco esse atributo tem valor, mas em outras ocasioes ele nao tem valor
	}



	//metodos de controle de encapsulamento da class
	get nome():string{
		return this._nome;
	}
	set nome(nome){
		this._nome=nome;
	}
	get celular():string{
		return this._celular;
	}
	set celular(celular){
		this._celular=celular;
	}
	get divida():number{
		return this._divida;
	}
	set divida(divida){
		this._divida=divida;
	}
	get id():number{
		return this._id;
	}
	set id(id){
		this._id=id;
	}


}