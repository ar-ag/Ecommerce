const express = require('express');
const router = express();
const {protect} = require('../middleware/authMiddleware');
const {addBoughtItem, getBoughtItems} = require('../controller/boughtItemsController')

router.route('/').get(protect, getBoughtItems).post(protect, addBoughtItem);

module.exports = router;