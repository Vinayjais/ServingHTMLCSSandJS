 
 const Product = require('../models/product');
 

const path = require('path');
exports.addproductController = (req,res,next) =>{
      
    res.sendFile( path.join(__dirname, '../' , 'views' , 'add-product.html') );

};

 exports.productcontroller = (req,res,next) =>{
    const product = new Product(req.body.title);
    product.save();
   // console.log(req.body.title);
    res.redirect('/');

  };

