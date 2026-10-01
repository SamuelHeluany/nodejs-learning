const path = require("path");
const fs = require("fs");

// Pegar o nome de um arquivo
console.log("Nome do arquivo:", path.basename(__filename));

// Pegar a extensão do arquivo
console.log("Extensão do arquivo:", path.extname(__filename));

// Criar um arquivo diretorio do arquivo atual
fs.writeFile(
  path.join(__dirname, "message.txt"),
  "Conteudo do arquivo criado",
  () => {},
);
