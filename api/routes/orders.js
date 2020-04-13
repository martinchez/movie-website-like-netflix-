var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) =>{
    res.status(200).json({
        message:'orders fetched'
    });
});
router.post('/', (req,res,next) =>{
    res.status(201).json({
        message:'order was created'
    });
});

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'orderdetailes',
        orderID:req.params.orderID
    });
});
router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'order deleted',
        orderID: req.params.orderID
    });
});
module.exports = router;
//routes that nned settalite
