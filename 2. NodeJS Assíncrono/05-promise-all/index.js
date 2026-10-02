const loadProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "pc gamer", price: 5000 }]);
    }, 3000);
  });
};

const loadCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "Computers" }]);
    }, 3000);
  });
};

const loadUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, name: "Nome Teste", age: 25 }]);
    }, 3000);
  });
};

// Promise.all executa várias promises ao mesmo tempo, ou seja, executou todas em 3s, no lugar de demorar 9s (3s em cada)
const init = async () => {
  const [products, categories, users] = await Promise.all([
    loadProducts(),
    loadCategories(),
    loadUsers(),
  ]);

  console.log({ products, categories, users });
};

init();
