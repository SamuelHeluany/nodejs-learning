// aqui importa
const createProduct = require("./products");

const product = createProduct(1, "Mouse", "300");

console.log(product.getInfo());
