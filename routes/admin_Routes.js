const express = require('express')
const router = express.Router()
const products = []
router.get('/add-product', (req, res) => {
  res.render('add-product', {docTitle: 'Add Product', path: '/add-product'})
})
router.post('/', (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body))
  // console.log(obj)
  products.push({title: obj.title})
  res.redirect('/')
})

exports.routes = router
exports.products = products