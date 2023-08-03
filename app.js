const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contactus');
const path = require('path');
const controllers = require('./controllers/404');


const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactusRoutes);
app.use(controllers.page404controller);



app.listen(4000 ,( ) => {
    console.log("Server is running...on 4000");
})