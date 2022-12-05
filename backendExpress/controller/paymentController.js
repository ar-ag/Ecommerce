const asyncHandler = require('express-async-handler');
const Payment = require('../models/paymentModel');
const User = require('../models/userModel');
const ethers = require('ethers');

const items = {
    '1':{id:1, url:'https://g.co/arts/ezJNxLpwyJPe3cGY9'},
    '2':{id:2, url:'https://g.co/arts/t7DgMxtM4rHCVeRh6'},
    '3':{id:3, url:'https://g.co/arts/Y9Q26uJMuDjtVuDU7'},
    '4':{id:4, url:'https://g.co/arts/r66Vf8uNF6oVxnvCA'},
    '5':{id:5, url:'https://g.co/arts/G49tfiw2SoXyonuK9'},
    '6':{id:6, url:'https://g.co/arts/TMsnozBRUtVp5b6M9'},
    '7':{id:7, url:'https://artsandculture.google.com/asset/marat-assassinated-jacques-louis-david/7QGjl9R141MCBw'},
}   


// @description:    generate a payment id
// @route:          GET /api/payment/getPaymentId/:itemId
// @access:         Public

const getPaymentId = asyncHandler(async(req,res) => {
    const paymentId = (Math.random() * 10000).toFixed(0);
    const payment = await Payment.create({
        // user:req.user.id,
        id:paymentId,
        itemId:req.params.itemId,
        paid:false
    });
    req.body = {
        paymentId
    };
    res.status(200).json(payment);
});

// @description:    get item's url
// @route:          GET /api/payment/getItemUrl/:paymentId
// @access:         Public

const getItemUrl = asyncHandler(async(req,res) => {
    const payment = await Payment.findOne({id:req.params.paymentId});

    if(payment && payment.paid === true) {
        res.body = {
            url : items[payment.itemId].url
        }
    } else {
        res.body = {
            url:''
        }
        
    }
    console.log(res.body);
    res.status(200).json(res.body);
})

module.exports = {
    getPaymentId,
    getItemUrl,
}