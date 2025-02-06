import BlackList from "../models/blackList.models.js"
import { Captain } from "../models/captain.models.js"
import { createCaptain } from "../services/captain.service.js"
import { validationResult } from "express-validator"




export const captainRegiter = async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {fullname,email,password,vehicle} = req.body;

    // existance check of captain
    const captain = await Captain.findOne({email})
    if(captain){
        return res.status(400).json({message:'Captain already exist'})
    }
    
    //hashing password 

    const hashedPass = await Captain.hashedPassword(password)

    //creating captain

    const newCaptain = await createCaptain({
        firstname : fullname.firstname,
        lastname :fullname.lastname,
        email,
        password : hashedPass ,
        color : vehicle.color,
        plate : vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType : vehicle.vehicleType
    })

    // generating token
    const token = newCaptain.generateAuthCaptionToken()
    console.log(token ,"captain register");
    

    res.status(200).json({token,newCaptain})

    
}

 

// login captain

export const loginCaptain = async (req, res) =>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400),json({errors : errors.array()})
    }

    const {email,password} = req.body;
    // console.log(email ,password);

    if(!password){
        return res.status(400).json({message : "Password is required"})
    }

    // check if capatain exist or not

    const captain = await Captain.findOne({email}).select('+password')

    if(!captain ){
        return res.status(401).json({message :"Invalid email and password"})
    }

    const correctPass = await captain.comparePassword(password)

    if(!correctPass){
        return res.status(401).json({message: "Invalid email and password"})
    }

    // generate token

    const token = captain.generateAuthCaptionToken()
    // console.log(token,"capatin");
    // set cookies 
    res.cookie('token',token)
    

    res.status(201).json({token,captain})

}


// get captain profile

export const getCaptainProfile = async (req,res) =>{
    return res.status(200).json({captain : req.captain})
}


// logout captain

export const logOutCaptain = async(req,res) =>{
    res.clearCookie('token')

    const token  = req.cookies.token || req.headers.authorization?.split(" ")[1]

    await BlackList.create({token})
    res.status(200).json({message:"Captain logged out"})
}