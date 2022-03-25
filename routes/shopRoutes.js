const express = require("express");
const router = express.Router();
const getProductControl = require('../controllers/productController')

router.get("/", getProductControl.getProductControl)

module.exports = router;
