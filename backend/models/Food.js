const mongoose = require('mongoose')
const foodSchema = new mongoose.Schema(
    {
        name:{
          type:String,
          required:true,
        },
        image:{
          type:String,
          required:true,
          
        },
        description:{
         type:String,
         required:true,
        },
        button:{
         type:String,
         required:true
        },
        category:{
          type:String,
        
        }
    }
)
const Food = mongoose.model("Food",foodSchema);
module.exports = Food;