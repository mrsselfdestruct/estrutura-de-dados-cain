class Setor {
    constructor(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    detalhes() {
        return `${this.nome} - ${this.descricao}`;
    }
}

module.exports = Setor;
