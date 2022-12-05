const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = mongoose.connect(
            'mongodb+srv://ar_ag:aryan%400703@cluster0.pzzvyn0.mongodb.net/ecommerceExpress?retryWrites=true&w=majority',
            {useNewUrlParser: true, useUnifiedTopology: true}
        );
        console.log(`Mongo DB connected`)
        
        
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB