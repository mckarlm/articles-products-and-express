const express = require('express');
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const productsRoute = require('./routes/products');
const articlesRoute = require('./routes/articles');
const productsDb = require('./db/products');
const articlesDb = require('./db/articles');

const app = express();
const PORT = process.env.PORT || 8080;

app.engine('.hbs', handlebars({
  defaultLayout: 'index',
  extname: '.hbs'
}));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use('/products', productsRoute);

//wild card, error catch, listener in top-down order

// app.get('/', (req, res)=>{
//   res.render('home')
// })

app.get('*', (req, res) => {
  res.send(`this is a page`);
});

app.listen(PORT, () => {
  process.stdout.write(`Server connected to port: ${PORT}`);
});