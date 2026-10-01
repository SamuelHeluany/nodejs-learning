export class Product {
  constructor(id, name, price) {
    this.name = name;
    this.price = price;
    this.id = id;
  }

  getInfo() {
    return `ID do produto: ${this.id}, Nome do produto: ${this.name}, Preço do produto: ${this.price}`;
  }
}

export function createProduct(id, name, price) {
  return new Product(id, name, price);
}

export const productPrice = 1000;
