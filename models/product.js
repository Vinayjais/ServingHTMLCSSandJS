const { json } = require("express");
const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "../", "data", "product.json");

const getProductFromFile = (cb) => {
  fs.readFile(p, (err, filecontent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(filecontent));
    }
  });
};

module.exports = class product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }
};
