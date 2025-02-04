import mongoose ,{ Schema}from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    fullname :{
        firstname :{
            type : String,
            required : true,
            minlength : [3 , 'Firstname atleast must be 3 characters long ']
        },
        lastname :{
            type : String,
            minlength : [3 , 'Firstname atleast must be 3 characters long ']
        },
    },
    email: {
        type : String ,
        required :true,
        unique : true,
        minlength : [5,"Email must be atleast 5 characters long"]
    },
    password : {
        type :String,
        required : true,
        select : false
    },
    sokectId :{
        type :String,

    }

},{timestamps : true})


// methons 
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id : this._id} , process.env.JWT_tOKEN_SECRET,{expiresIn:'24h'})
    return token
}

userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password , this.password)
}

userSchema.statics.hashPassword = async function (password) {
    return bcrypt.hash(password,10)
}

export const User = mongoose.model("User",userSchema)
