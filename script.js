let filmes = [
    { titulo: "Através da Minha Janela 1", ano: 2022, genero: "Romance", duracao: 116, avaliacao: 7.2, pais: "Espanha", diretor: "Marçal Forés", elenco: ["Clara Galle", "Julio Peña"], sinopse: "Raquel se apaixona pelo misterioso vizinho Ares, mudando sua vida." },
    { titulo: "Através da Minha Janela 2", ano: 2023, genero: "Romance", duracao: 110, avaliacao: 7.5, pais: "Espanha", diretor: "Marçal Forés", elenco: ["Clara Galle", "Julio Peña"], sinopse: "O casal enfrenta novos desafios para manter o relacionamento." },
    { titulo: "O Date Perfeito", ano: 2019, genero: "Comédia Romântica", duracao: 95, avaliacao: 6.8, pais: "EUA", diretor: "Chris Nelson", elenco: ["Noah Centineo", "Laura Marano"], sinopse: "Um jovem cria um app onde se oferece como par ideal para qualquer ocasião." }
];

let series = [
    { titulo: "Cobra Kai", temporadas: 6, genero: "Ação", avaliacao: 8.2, status: "Finalizada", pais: "EUA", criadores: "Josh Heald, Jon Hurwitz, Hayden Schlossberg", elenco: ["Ralph Macchio", "William Zabka"], sinopse: "Décadas após Karate Kid, Johnny reabre o dojo Cobra Kai." },
    { titulo: "Ginny & Georgia", temporadas: 2, genero: "Drama", avaliacao: 7.5, status: "Em andamento", pais: "EUA", criadores: "Sarah Lampert", elenco: ["Brianne Howey", "Antonia Gentry"], sinopse: "Mãe e filha recomeçam a vida em uma nova cidade." }
];

function listarFilmes() {
    let i = 0;
    while(i < filmes.length) {
        let f = filmes[i];
        console.log("Título: " + f.titulo + ", Ano: " + f.ano + ", Gênero: " + f.genero + ", Duração: " + f.duracao + " min, Avaliação: " + f.avaliacao);
        i++;
    }
}

function listarSeries() {
    for(let i = 0; i < series.length; i++) {
        let s = series[i];
        console.log("Título: " + s.titulo + ", Temporadas: " + s.temporadas + ", Gênero: " + s.genero + ", Avaliação: " + s.avaliacao + ", Status: " + s.status);
    }
}

function buscarFilme(nome) {
    let encontrado = null;
    let i = 0;
    while(i < filmes.length) {
        if(filmes[i].titulo == nome) {
            encontrado = filmes[i];
        }
        i++;
    }
    return encontrado;
}

function buscarSerie(nome) {
    let encontrado = null;
    for(let i = 0; i < series.length; i++) {
        if(series[i].titulo == nome) {
            encontrado = series[i];
        }
    }
    return encontrado;
}

function adicionarFilme(titulo, ano, genero, duracao, avaliacao, pais, diretor, elenco, sinopse) {
    let filme = { titulo: titulo, ano: ano, genero: genero, duracao: duracao, avaliacao: avaliacao, pais: pais, diretor: diretor, elenco: elenco, sinopse: sinopse };
    let novoArray = [];
    let i = 0;
    while(i < filmes.length) {
        novoArray[i] = filmes[i];
        i++;
    }
    novoArray[filmes.length] = filme;
    filmes = novoArray;
}

function adicionarSerie(titulo, temporadas, genero, avaliacao, status, pais, criadores, elenco, sinopse) {
    let serie = { titulo: titulo, temporadas: temporadas, genero: genero, avaliacao: avaliacao, status: status, pais: pais, criadores: criadores, elenco: elenco, sinopse: sinopse };
    let novoArray = [];
    for(let i = 0; i < series.length; i++) {
        novoArray[i] = series[i];
    }
    novoArray[series.length] = serie;
    series = novoArray;
}

// Exemplos de uso:
listarFilmes();
listarSeries();
console.log(buscarFilme("O Date Perfeito"));
console.log(buscarSerie("Cobra Kai"));
adicionarFilme("Filme Novo", 2025, "Aventura", 120, 8.0, "Brasil", "Diretor X", ["Ator 1", "Ator 2"], "Sinopse do filme novo");
listarFilmes();
