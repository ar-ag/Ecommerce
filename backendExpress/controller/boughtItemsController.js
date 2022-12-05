const asyncHandler = require('express-async-handler');
const BoughtItems = require('../models/boughtItemsModel');

const User = require('../models/userModel');

// @description:    Add item to Bought Items
// @route:          POST /api/bought
// @Acccess:        Private

const addBoughtItem = asyncHandler(async(req, res) => {
    const boughtItem = await BoughtItems.create({
        user : req.user.id,
        id: req.body.id,
        img: req.body.img,
        name:req.body.name,
        artist: req.body.artist,
        price: req.body.price,
        url: req.body.url
    })

    res.status(200).json(boughtItem);
})

//@description:     Get bought items
//@route:           GET /api/bought
//@access:          Private
const getBoughtItems = asyncHandler(async(req, res) => {
    const boughtItems = await BoughtItems.find({
        user:req.user.id
    });

    res.status(200).json(boughtItems);
})

module.exports = {
    addBoughtItem,
    getBoughtItems
}