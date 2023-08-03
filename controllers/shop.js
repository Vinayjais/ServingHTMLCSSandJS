const path = require('path');
const Product = require('../models/product');

exports.shopcontroller = (req,res,next)=>{
    Product.fetchAll( products =>{
        console.log(products);
        res.sendFile(path.join(__dirname,'../','views','shop.html'));
    
    });
   

};