import {Passageiro} from './passageiro';

export interface IViagem{
	//Atributos
	pontoDePartida:number;
	destino:number;
	/*destino:number;
	consumoVeiculo:number;
	valorCombustivel:number;
	tipoDeDivisao:number;
	qntsPassageiroTera:number;*/
	
	//medotos da interface
	embarcar(Passageiro):void;
	desembarcar(Passageiro):void;
	//addPassageiro(Passageiro):void;
	//excluirPassageiro(Passageiro):void;
	salvarViagemComoPredefinida():void;
	concluirViagem():void;
	
}

export class Viagem implements IViagem{
	
	//private _passageiros: Array<Passageiro>;
	
	private _id:number = null;
	private _destino=null;
	
	constructor(private _passageiros:Array<Passageiro>, private _pontoDePartida:number, private _qntsPassageirosTera:number, private _consumoCombustivel:number, private _valorCombustivel:number, private _tipoDeDivisao:number, /*destino:number,*/ id?:number){
		
		//this._passageiros = passageiros;
		
		this._id = id;
		
	}
	
	set pontoDePartida(p:number){
		this._pontoDePartida = p;
	}
	get pontoDePartida():number{
		return this._pontoDePartida;
	}
	
	set destino(p: number){
		this._destino=p;
	}
	get destino():number{
		return this._destino;
	}
	
	
	public embarcar(p:Passageiro){
		this._passageiros.push(p);
	}
	
	public desembarcar(p:Passageiro){
		
		let toRemove:number = this._passageiros.indexOf(p);
		
		this._passageiros.splice(toRemove, 1);
	}
}
