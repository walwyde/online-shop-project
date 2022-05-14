const express = require("express");

const router = express.Router();

const shopControl = require('../controllers/shopController')

router.get("/", shopControl.getShopProducts)

router.get('/products/:productid', shopControl.getProduct)

router.get('/cart', shopControl.getCart)

router.post('/cart', shopControl.postCart)

module.exports = router;
