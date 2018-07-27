const products = [{ name: 'Cake', price: 2, inventory: 10, id: 1  }];
let currentId = 1;

function all() {
  return products;
};

function addProduct(product) {
  product.id = ++currentId
  products.push(product);
};

function getProduct(id) {
  num = parseFloat(id.slice(1, id.length));
  for (let i = 0; i < products.length; i++) {
    if (typeof num === 'number' && products[i].id === num) {
      return products[i];
    }
  }
}
// add more methods here

function editItem(product){

}

module.exports = {
  all: all,
  addProduct: addProduct,
  getProduct: getProduct,
}