const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('../backendExpress/middleware/errorMiddleware')
const connectDB = require('./config/db');
const app = express();
const ethers = require('ethers');
const PaymentProcessor = require('../frontend/src/contracts/PaymentProcessor.json');
const Payment  = require('./models/paymentModel');

connectDB();

app.use(express.json()); 
app.use(express.urlencoded({extended:false}));

app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/users',require('./routes/userRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/bought',require('./routes/boughtRoutes'))

app.use(errorHandler)

app.listen(5000, () => console.log(`server started at port 5000`))

const listenToEvents = () => {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:9545');
    const networkId = '5777';

    const paymentProcessor = new ethers.Contract(
        PaymentProcessor.networks[networkId].address,
        PaymentProcessor.abi,
        provider
    );

    paymentProcessor.on('PaymentDone', async(payer, amount, paymentId, date) => {
        console.log(`
        from:${payer}
        amount:${amount}
        paymentId:${paymentId}
        date:${(new Date(date.toNumber()*1000)).toLocaleString}
        `);

        const payment = await Payment.findOne({id:paymentId});
        if(payment) {
            payment.paid = true;
            await payment.save();
        }
    })
}

listenToEvents();
