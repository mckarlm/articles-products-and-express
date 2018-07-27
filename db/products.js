const products = [{ name: 'Cake', price: 2, inventory: 10, id: 1 }];
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

function editProduct(id, productInfo){
  num = parseFloat(id.slice(1, id.length));
  for (let i=0; i<products.length; i++){
    if (typeof num === 'number' && products[i].id === num){
      products[i].name = productInfo.name;
      products[i].price = productInfo.price;
      products[i].inventory = productInfo.inventory;
      return products[i];
    }
  }
}

function deleteProduct(id){
  num = parseFloat(id.slice(1, id.length));
  for (let i=0; i<products.length; i++){
    if (typeof num === 'number' && products[i].id === num){
      products.splice(i, 1);
      return products;
    }
  }
}



// add more methods here

module.exports = {
  all: all,
  addProduct: addProduct,
  getProduct: getProduct,
  editProduct: editProduct,
  deleteProduct: deleteProduct
}