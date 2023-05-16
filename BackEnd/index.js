const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userrouter = require('./routes/User')
const adminrouter = require('./routes/Admin')
const retailrouter=require('./routes/Retailer')
const productrouter=require('./routes/Product')
// const approvalrouter=require('./routes/Productap')
const paymentrouter=require('./routes/Payment')
const cartrouter=require('./routes/Cart')
const listrouter=require('./routes/Wishlist')
const orderrouter=require('./routes/Order')
const cors = require('cors')
app.use(cors({
    origin:"*"
}))

app.listen(4000, (err) => {
    if (err) {
        console.log("error", err)
    }
    console.log("server started")
})
app.use(express.json())
app.use(express.urlencoded())
app.use('/User', userrouter);
app.use('/admin', adminrouter);
app.use('/retailer', retailrouter);
app.use('/product', productrouter);
// app.use('/product', approvalrouter);
app.use('/cart',cartrouter);
app.use('/wishlist',listrouter);
app.use('/payment',paymentrouter)
app.use('/order',orderrouter)
mongoose.connect("mongodb://127.0.0.1:27017/TimeCraft", {

    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.once("open", () => {
    console.log("connected")
})


