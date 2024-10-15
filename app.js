require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const seedDB=require('./seed')
const seedDB1=require('./seed1')
const session = require('express-session')
const LocalStrategy=require('passport-local')
const passport=require('passport')
const passportLocalMongoose = require('passport-local-mongoose');
const ejsMate=require('ejs-mate')
const bodyParser = require('body-parser');
const path=require('path')
const GoogleAuthenticationRoutes=require('./routes/googleAuthentication')
// const AuthenticationRoutes=require('./routes/authenticationRoutes')
const ProductRoutes=require('./routes/productRoutes')
// const PaymentRoutes=require('./routes/paymentRoutes')

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Database is Connected Successfully");
})
.catch((err)=>{
    console.log(err);
})

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly:true,
        maxAge: 7 * 24 * 60 * 60 * 1000 * 1
    }
}))

app.engine('ejs',ejsMate)
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

seedDB()
seedDB1()

app.use(ProductRoutes)


const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is Connected at Port No ${port}`);
})
