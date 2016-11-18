//Importa as classes Passageiro e Viagem dos arquivos na mesma pasta
import {Passageiro} from './passageiro';
import {Viagem} from './viagem';

//Interface desta classe...
export interface Iparticipa{

	//medotos da interface
	pontoDeEmbarque:number;
	pontoDeDesembarque:number;
	
}

export class Participa implements Iparticipa{

    //pontoDeDesembarque é opcional, mas como este atributo precisa ser atribuido ate o fim da viagem então foi declarado.
    private _pontoDeDesembarque:number;

    constructor(private _passageiro:Passageiro, private _viagem:Viagem, private _pontoDeEmbarque:number, pontoDeDesembarque?:number){
		//Se pontoDeDesembarque foi dado...
        if(pontoDeDesembarque){
            this._pontoDeDesembarque=pontoDeDesembarque;
        }
        else{
            this._pontoDeDesembarque=null;
        }
    }

	//getters e setters
    get pontoDeEmbarque():number{
		return this._pontoDeEmbarque;
	}
	set pontoDeEmbarque(ponto:number){
		this._pontoDeEmbarque=ponto;
	}
    get pontoDeDesembarque():number{
		return this._pontoDeDesembarque;
	}
	set pontoDeDesembarque(ponto:number){
		this._pontoDeDesembarque=ponto;
	}
	
	//Caso não se queira permitir mudar o passageiro e a viagem então remover os set's
	get passageiro():Passageiro{
		return this._passageiro;
	}
	set passageiro(p:Passageiro){
		this._passageiro=p;
	}
	get viagem():Viagem{
		return this._viagem;
	}
	set viagem(v:Viagem){
		this._viagem=v;
	}

}