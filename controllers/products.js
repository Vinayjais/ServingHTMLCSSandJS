
const path = require('path');
exports.addproductController = (req,res,next) =>{
      
    res.sendFile( path.join(__dirname, '../' , 'views' , 'add-product.html') );

};

 exports.productcontroller = (req,res,next) =>{
    console.log(req.body);
    res.redirect('/');

  };

