import {Passageiro} from "../controller/passageiro";
import {DAOPassageiro} from "../model/DAOPassageiro";

export class Financeiro{
	
	public listaDePassageirosDevedores:DAOPassageiro;

	constructor() {
		this.listaDePassageirosDevedores=new DAOPassageiro();
	}

	divideCustoPorN(){
		
	}

	divideCustoPorTaxi(){
		
	}

	add(){
		this.listaDePassageirosDevedores.add({"nome":"paulo","celular":"99322128","divida":"10"});
		this.listaDePassageirosDevedores.add({"nome":"Jose","celular":"99362128","divida":"15"});
		this.listaDePassageirosDevedores.add({"nome":"Maria","celular":"99722128","divida":"8"});
		this.listaDePassageirosDevedores.add({"nome":"Lucia","celular":"99822128","divida":"2"});
	}

	listaPassageirosDevedores():Array<Passageiro>{
		var pesquisa=this.listaDePassageirosDevedores.busca("divida>?",[0]);
		var listaPassageiros=[];
		 if(pesquisa.rows.length > 0) {
			for(var i = 0; i < pesquisa.rows.length; i++) {
				listaPassageiros.push(new Passageiro(pesquisa.rows.item(i).nome,pesquisa.rows.item(i).celular));
			}
			return listaPassageiros;
	 	}else{
			return [new Passageiro(null,null)];
		}

			
		
	}


}