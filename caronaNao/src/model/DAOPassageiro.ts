import {Passageiro} from "../controller/passageiro";
import {Component} from '@angular/core';
import {StatusBar, SQLite} from 'ionic-native';
import {Platform} from 'ionic-angular';

export class DAOPassageiro{

	public db:SQLite;
    public listaDePassageiros;


	constructor() {
        this.listaDePassageiros={rows:{length:0}};
        this.db = new SQLite();
    }



    add(dados){

        this.db.openDatabase({name: "data.db", location: "default"}).then(() => {
            
            this.db.executeSql("insert into passageiro(nome,celular,divida) values (?,?,?)",[dados.nome,dados.celular,dados.divida]).then((data) => {
                console.log("salvo");
            }, (error) => {
                console.log("ERROR: " + JSON.stringify(error));
            });


        }, (error) => {
            console.log("ERROR: ", error);
        });


    }


	busca(condicaoString,condicaoArray){

        
        var self=this;
        this.db.openDatabase({name: "data.db", location: "default"}).then(() => {
            
            this.db.executeSql("SELECT * FROM passageiro where "+condicaoString, condicaoArray).then((data)=>{
                
                self.listaDePassageiros=data;    
                return data;

            }, (error) => {
                console.log("ERROR: " + JSON.stringify(error));
            });


        }, (error) => {
            console.log("ERROR: ", error);
        });

        return this.listaDePassageiros;
        
	}
}