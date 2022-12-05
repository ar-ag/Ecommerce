const mongoose = require('mongoose');


const paymentSchema = new mongoose.Schema({

    // user: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref: 'User'
    // },
    id:String,
    itemId:String,
    paid:Boolean
});

module.exports = mongoose.model('Payment', paymentSchema);