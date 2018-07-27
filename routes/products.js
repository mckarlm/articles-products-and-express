const express = require('express');
const router = express.Router();
const productsDb = require('../db/products');

router.route('/');
// Please remember to fix so it renders
// remember to implement some sort of res.redirect whenever appropriate

// GETS ENTIRE CATALOG OF PRODUCTS AND INFORMATION
router.get('/', (req, res) => {
  let allProductsArr = productsDb.all();
  console.log(allProductsArr);
  
  res.send(productsDb.all());
});

// GETS ONE SPECIFIC PRODUCT'S INFORMATION
// IF IT FAILS, IT RETURNS ENTIRE CATALOG
router.get('/:id', (req, res) => {
  console.log(req.params.id)
  const productId = req.params.id
  res.send(productsDb.getProduct(productId));

  // this uses '/*'
  // let productId = parseFloat(req.url.slice(1, req.url.length));
  // if (productId) {
  //   res.send(productsDb.getProduct(req.url));
  // } else {
  //   res.send(productsDb.all());
  // };
});

// ADDS A PRODUCT+INFORMATION TO THE CATALOG
// BRINGS UP ENTIRE CATALOG AFTER ADDING A PRODUCT
router.post('/', (req, res) => {
  const productBody = req.body;
  productsDb.addProduct(productBody);
  res.send(productsDb.all());
});

// FINDS A SPECIFIC PRODUCT AND EDITS THE CONTENTS
router.put('/:id', (req, res) => {
  const productBody = req.body;
  const productId = req.params.id
  if (productId) {
    res.send(productsDb.editProduct(productId, productBody));
  };
});

// FINDS A SPECIFIC PRODUCT AND DELETES IT FROM THE ARRAY
router.delete('/:id', (req, res) => {
  const productId = req.params.id;
  if (productId) {
    res.send(productsDb.deleteProduct(productId));
  };
});

module.exports = router;