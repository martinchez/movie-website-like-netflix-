var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyPerser = require('body-parser');

var productRoutes = require('./api/routes/products.js');
var orderRoutes=require('./api/routes/orders.js');

app.use(morgan('dev'));
app.use(bodyPerser.urlencoded({extended:false}));
app.use(bodyPerser.json()); 

//routes should handle requests
app.use('/products', productRoutes);
app.use('/orders',orderRoutes);

app.use((req,res,next) =>{
    var error=new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});
module.exports = app;