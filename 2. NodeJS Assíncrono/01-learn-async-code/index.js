console.log("Primeira linha.");

setTimeout(() => {
  console.log("Segunda linha que vai levar 3 segundos para ser executada.");
}, 3000);

console.log(
  "Terceira linha que foi executada antes da ssegunda, pois código async não impede a proxima linha de ser executada.",
);
