const express = require('express');
const router = express();
const {protect} = require('../middleware/authMiddleware');
const {addItem, getItems, deleteItem} = require('../controller/cartController');

router.route('/').get(protect, getItems).post(protect, addItem);
router.route('/:id').delete(protect, deleteItem);

module.exports = router;