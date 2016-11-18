"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aluno = (function (_super) {
    __extends(Aluno, _super);
    function Aluno(idade, nome) {
        _super.call(this, idade, nome);
    }
    Aluno.prototype.getNome = function () {
        return this.nome;
    };
    Aluno.prototype.getIdade = function () {
        return this.idade;
    };
    return Aluno;
}(Pessoa));
