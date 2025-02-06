import mongoose ,{Schema} from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const captainSchema = new Schema({
    fullname :{
        firstname :{
            type :String,
            required  :true,
            minlength : [3, " First name must be atleast 3 characters long"]
        },
        lastname :{
            type :String,
            minlength :[3 , 'Last name must be atleast 3 character long']
        }
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        match : [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,'Invalid Email']
    },
    password : {
        type : String,
        required  :true, 
        select : false
    },
    socketID : {
        type:String
    },
    status : {
        type :String,
        enum : ['active','inactive'],
        default : 'inactive'
    },
    vehicle : {
        color : {
            type :String,
            required : true,
            minlength : [3 ,"Color must be atleast 3 character long"]
        },
        plate : {
            type : String,
            required : true,
            minlength : [3, 'Plate must be atleast 3 character long']
        },
        capacity :{
            type : Number,
            requred : true,
            min : [1,'Capacity must be atleast 1']
        },
        vehicleType : {
            type : String,
            enum : ['car','motorcycle','auto'],
            required : true
        }
    },
    location : {
        latitude : {
            type : Number,
        },
        longitute : {
            type : Number
        }
    }

},{timestamps : true})



// methods 

captainSchema.methods.generateAuthCaptionToken =  function(){
    const token =  jwt.sign({_id : this._id},process.env.JWT_TOKEN_SECRET_CAPTION ,{expiresIn : '24h'})  
    console.log(token,"from model");
    
    return token;
}


captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password , this.password)
}

captainSchema.statics.hashedPassword = async function(password){
    return bcrypt.hash(password,10)
}


export const Captain = mongoose.model('Captain',captainSchema)
