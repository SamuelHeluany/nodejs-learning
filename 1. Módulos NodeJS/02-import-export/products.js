class Product {
  constructor(id, name, price) {
    this.name = name;
    this.price = price;
    this.id = id;
  }

  getInfo() {
    return `ID: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`;
  }
}

function createProduct(id, name, price) {
  return new Product(id, name, price);
}

// aqui exporta
// obs: pode ser exportado tudo (função, variavel, classe)
module.exports = createProduct;
