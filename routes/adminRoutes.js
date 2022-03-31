const express = require("express");
const router = express.Router();
const adminControl = require('../controllers/adminController')

router.get("/add-product", adminControl.addProductControl)


router.post("/", adminControl.postProductControl)

router.get('/products', adminControl.getProductControl)

router.get('/admin-products', adminControl.getAdminProducts)

module.exports = router;
