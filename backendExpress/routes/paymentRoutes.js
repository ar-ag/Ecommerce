const express = require('express');
const router = express();
const cors = require('cors');
const {protect} = require('../middleware/authMiddleware');
const {getPaymentId, getItemUrl} = require('../controller/paymentController');

router.use(cors())

router.get('/getPaymentId/:itemId', getPaymentId);
router.get('/getItemUrl/:paymentId', getItemUrl);

module.exports=router;