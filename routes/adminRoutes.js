const express = require("express");
const router = express.Router();
const productControl = require('../controllers/productController')

router.get("/add-product", productControl.addProductControl)


router.post("/", productControl.postProductControl)

module.exports = router;
