const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const dotenv = require('dotenv');
dotenv.config();

// @description:    Register new user
// @route:          POST api/users
//@access:          Public
const registerUser = asyncHandler(async(req,res) => {
    const {name, email, password} = req.body;
     
    if(!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields') 
    }

    // to check if user exists
    const userExist = await User.findOne({email});
    console.log(userExist);

    if(userExist) {
        res.status(400)
        throw new Error('User already exists')
    }

     // hashing password
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);

     const user = await User.create({
        name,
        email,
        password:hashedPassword
     })

     if(user) {
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
     } else {
        res.status(400);
        throw new Error('Invalid user data')
     }
    
})

//@description:     Authenticate a user
//route:            POST api/users/login
//@access:          Public

const loginUser = asyncHandler( async(req,res) => {
    const {email, password} = req.body;
    console.log(req.body);
    console.log(process.env.JWT_SECRET);
    if(!email || !password) {
        res.status(400);
        throw new Error('Please enter all fields') 
    }

    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })

    } else {
        res.status(400);
        throw new Error('Invalid credentials')
    }
})


//@description:     GET user data
//@route:           GET api/users/me
//@access:          Private
const getMe = asyncHandler( async(req,res) => {
    res.status(200).json(req.user);
})

// generate JWT
const generateToken = (id) => {
    console.log(id);
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn:'30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}