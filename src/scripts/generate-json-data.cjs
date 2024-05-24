// This script generates a JSON file with fake data for products. Data is generated randomly so may not make sense

const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

function generateProduct() {
  const product = {};

  product.name = faker.commerce.productName();
  product.price = faker.commerce.price();
  product.discount = Math.floor(Math.random() * 30) + 5;
  product.category = 'Electronics';
  product.description = faker.commerce.productDescription();
  product.ratings = parseFloat((Math.random() * 2 + 3).toFixed(1));
  product.images = Array.from(
    { length: parseInt(Math.random() * 4 + 2) },
    () => `https://source.unsplash.com/200x300/?${product.name.split(' ')[0]}`,
  );
  return product;
}

const products = Array(100)
  .fill()
  .map(() => generateProduct());

fs.writeFileSync(
  path.join(__dirname, '../data/products.json'),
  JSON.stringify(products, null, 2),
);
