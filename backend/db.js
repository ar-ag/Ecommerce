const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://ar_ag:aryan%400703@cluster0.pzzvyn0.mongodb.net/blockchain-ecommerce?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
    id:String,
    itemId:String,
    paid:Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
}