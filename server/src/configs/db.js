const mongoose = require("mongoose");

module.exports = async()=>{
    await mongoose.connect("mongodb+srv://abhishek:abhi_123@cluster0.6y0oi.mongodb.net/tataCliqDb?retryWrites=true&w=majority")
}