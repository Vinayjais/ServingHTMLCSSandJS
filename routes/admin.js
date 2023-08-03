const express = require('express');
const router = express.Router();

const controllers = require('../controllers/products');


router.get('/add-product', controllers.addproductController);
router.post('/product',controllers.productcontroller);


module.exports = router;