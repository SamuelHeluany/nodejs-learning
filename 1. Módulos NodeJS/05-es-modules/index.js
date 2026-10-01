import { Product, createProduct, productPrice } from "./product.js";

const product = createProduct(1, "Notebook", productPrice);

console.log(product.getInfo());
