const express = require("express");
const router = express.Router();
const shopControl = require('../controllers/shopController')

router.get("/", shopControl.getShopProducts)

router.get('/cart', shopControl.getCart)
module.exports = router;
