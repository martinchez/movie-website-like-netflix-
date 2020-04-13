var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling get request function'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'handling POST request function'
    });
});

router.get('/:productId', (req, res, next) => {
    var id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'you discovered a special type of ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you passed an ID'
        });
    }

});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product'
    })
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    })
});
module.exports = router;
