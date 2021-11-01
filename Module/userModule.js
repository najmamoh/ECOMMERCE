const Mongoose=require('mongoose')

const userSchema = Mongoose.Schema({
    userName:{
        type:String
    },
    Email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    ConfirmPassword:{
type:Number,
required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
      },
      product: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
})

const userModel = Mongoose.model('user',userSchema);

module.exports =userModel