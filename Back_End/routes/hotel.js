const path = require('path');

const express = require('express');

const hotelController = require('../controllers/hotel');

const router = express.Router();

// /admin/add-product => GET
// router.get('/add-product', hotelController.getAddProduct);

// // /admin/products => GET
// router.get('/products', hotelController.getRooms);
router.get('/', hotelController.getRooms);

// // /admin/add-product => POST
// router.post('/add-product', adminController.postAddProduct);

// router.get('/edit-product/:productId', adminController.getEditProduct);

// router.post('/edit-product', adminController.postEditProduct);

// router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;