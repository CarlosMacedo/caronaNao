import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Financeiro} from './../../controller/financeiro';
import {Passageiro} from '../../controller/passageiro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public nomes:Array<Passageiro>;
  public financeiro:Financeiro;


  constructor(public navCtrl: NavController) {
    this.financeiro =new Financeiro();    
  }

  lista(){

    this.nomes=this.financeiro.listaPassageirosDevedores();
    alert(this.nomes[0].nome);
  
  }

  add(){
    this.financeiro.add();
  }


}
