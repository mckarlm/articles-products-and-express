const express = require('express');
const handlebars = require('express-handlebars');
const PORT = process.env.PORT || 8080;
let productsArr = [];
let productsObj;
let idCounter = 0;

const app = express();

app.post('/products', (req, res)=>{
  const reqBody = req.body;
  reqBody.id = idCounter;
  console.log(reqBody);
  idCounter++;
  console.log(idCounter + ' this is the counter')
  productsObj = reqBody;
  productsArr.push(productsObj);
  console.log(productsArr);
});

app.listen(PORT, ()=>{
  process.stdout.write(`Server connected to port: ${PORT}`);
});