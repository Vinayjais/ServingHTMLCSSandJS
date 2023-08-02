const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contactus');
const path = require('path');


const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);

app.use((req,res,next)=>{

    res.status(404).sendFile(path.join(__dirname,'views','404.html'));

});



app.listen(4000 ,( ) => {
    console.log("Server is running...");
})