const mongoose= require('mongoose');
const Category = require('./Categories');
const detailSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,

    },
    image:{
        type:String,
        required:true
    }, 
    images: {
    type: [String],
    required: true
},
    variety:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true

    },
    button:{
        type:String,
        required:true
    }

    }
)
const Detail=mongoose.model("detail",detailSchema);
module.exports=Detail;