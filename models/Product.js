const mongoose=require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    subname:{
        type:String,
        trim:true,
        required:true
    },
    img1:{
        type:String,
        trim:true,
        required:true
    },
    img2:{
        type:String,
        trim:true,
        required:true
    },
    img3:{
        type:String,
        trim:true,
        required:true
    },
    img4:{
        type:String,
        trim:true,
        required:true
    },
    img5:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        trim:true,
        required:true
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports=Product