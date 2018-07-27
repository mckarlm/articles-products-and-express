const express = require('express');
const router = express.Router();
const productsDb = require('../db/products');

router.route('/');
// Please remember to fix so it renders
// remember to implement some sort of res.redirect when appropriate

// GETS ENTIRE CATALOG OF PRODUCTS AND INFORMATION
router.get('/', (req, res) => {
  res.send(productsDb.all());
});

// GETS ONE SPECIFIC PRODUCT'S INFORMATION
// IF IT FAILS, IT RETURNS ENTIRE CATALOG
router.get('/*', (req, res) => {
  let productId = parseFloat(req.url.slice(1, req.url.length));
  if (productId) {
    res.send(productsDb.getProduct(req.url));
  } else {
    res.send(productsDb.all());
  };
});

// ADDS A PRODUCT+INFORMATION TO THE CATALOG
// BRINGS UP ENTIRE CATALOG AFTER ADDING A PRODUCT
router.post('/', (req, res) => {
  const productBody = req.body;
  console.log(req.body);
  console.log(productBody.name);
  console.log(productBody.price);
  console.log(productBody.inventory);
  productsDb.addProduct(productBody);
  res.send(productsDb.all());
});

// FINDS A SPECIFIC PRODUCT AND EDITS THE CONTENTS
router.put('/*', (req, res) => {
  const productBody = req.body;
  let productId = parseFloat(req.url.slice(1, req.url.length));
  if (productId) {
    res.send(productsDb.editProduct(req.url, productBody));
  };
});

// FINDS A SPECIFIC PRODUCT AND DELETES IT FROM THE ARRAY
router.delete('/*', (req, res)=>{
  let productId = parseFloat(req.url.slice(1, req.url.length));
  if (productId) {
    res.send(productsDb.deleteProduct(req.url));
  };
});

module.exports = router;