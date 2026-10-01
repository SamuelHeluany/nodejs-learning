const fs = require("fs");
const path = require("path");

// Criar uma pasta em um diretorio
fs.mkdir(path.join(__dirname, "nome-da-pasta"), (error) => {});

// Criar arquivo na nova pasta
fs.writeFile(
  path.join(__dirname, "nome-da-pasta", "nome-do-novo-arquivo.txt"),
  "Conteudo do novo arquivo",
  (error) => {},
);

// Adicionar novo conteudo ao arquivo
fs.appendFile(
  path.join(__dirname, "nome-da-pasta", "nome-do-novo-arquivo.txt"),
  "Novo conteudo inserido no arquivo",
  (error) => {},
);

// Ler conteudo de um arquivo (tem que ter o utf-8 para ler de forma correta)
fs.readFile(
  path.join(__dirname, "nome-da-pasta", "nome-do-novo-arquivo.txt"),
  "utf-8",
  (error, data) => {
    console.log(data);
  },
);
