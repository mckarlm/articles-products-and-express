const express = require('express');
const router = express.Router();
const productsDb = require('../db/products');
let num = Number;

router.route('/');

router.get('/', (req, res)=>{
  //console.log(req)
  res.send(productsDb.all());
});

router.get('/*', (req, res)=>{
  let productId = parseFloat(req.url.slice(1, req.url.length));
  if (productId){
    res.send(productsDb.getProduct(req.url))
  } else {
    res.send(productsDb.all())
  }
})

router.post('/', (req, res)=>{
  const reqBody = req.body;
  productsDb.addProduct(reqBody);
  res.send(productsDb.all())
});

module.exports = router;