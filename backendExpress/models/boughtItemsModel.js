const mongoose = require('mongoose');

const boughtItemsSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'user required'],
        ref: 'User'
    },
    id:{
        type:Number,
        required:[true, 'please add item id'],
    },
    img:{
        type:String,
        required:[true, 'please add image preview url'],
    },
    name:{
        type:String,
        required:[true, 'please add name of the painting'],
    },
    artist:{
        type:String,
        required:[true, 'please add artist'],
    },

    price:{
        type:Number,
        required:[true, 'please add item price'],
    },
    url: {
        type:String,
        required:[true, 'add image url'],
    },

})

module.exports = mongoose.model('BoughtItems', boughtItemsSchema);