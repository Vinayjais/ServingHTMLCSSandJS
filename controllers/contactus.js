const path = require('path');

exports.contactusController = (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
     
    
};
exports.successController = (req,res)=>{
    res.send('Successfully Submitted..')
};