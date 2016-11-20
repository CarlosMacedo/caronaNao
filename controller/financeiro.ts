import {Passageiro} from "./passageiro";

export class Financeiro{
	
	constructor(public listaDePassageirosDevedores:DAOPassageiro) {
		
	}

	divideCustoPorN(){
		
	}

	divideCustoPorTaxi(){
		
	}

	listaPassageirosDevedores():Array<Passageiro>{
		return this.listaDePassageirosDevedores.busca("a=? or c=?",[1,0]);
	}


}