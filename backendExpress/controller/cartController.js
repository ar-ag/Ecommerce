const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel');
const User = require('../models/userModel');

// @description:    Add item to cart
// @route:          POST /api/cart
// @Acccess:        Private

const addItem = asyncHandler(async (req,res) => {
    // if(!req.body.id) {
    //     res.status(400)
    //     throw new Error('please add a text field')
    // }

    const item = await Cart.create({
        user : req.user.id,
        id: req.body.id,
        img: req.body.img,
        name:req.body.name,
        artist: req.body.artist,
        price: req.body.price

    })

    console.log(req.body);
    res.status(200).json(item);
})


//@description:     Get cart items
//@route:           GET /api/cart
//@access:          Private
const getItems = asyncHandler(async(req, res) => {
    const items = await Cart.find({
        user:req.user.id
    });

    res.status(200).json(items);
})


//@description: delete cart items
//@route:       DELETE /api/cart/:id
//@access:      private

const deleteItem = asyncHandler(async(req, res) => {
    const item = await Cart.findById(req.params.id);
    if(!item) {
        res.status(400);
        throw new Error('No such item in the cart')
    }

    if(!req.user) {
        res.status(401);
        throw new Error('Invalid User')
    }

    if(item.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('user not authorized');
    }

    const deletedItem = await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedItem);
})

module.exports = {
    addItem,
    getItems,
    deleteItem,
}
