const express = require('express');

const controllers = require('../controllers/shop');


const router = express.Router();

router.get('/',controllers.shopcontroller);


module.exports= router;