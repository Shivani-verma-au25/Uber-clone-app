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

    res.status(200).json({token,newCaptain})

    
}

 