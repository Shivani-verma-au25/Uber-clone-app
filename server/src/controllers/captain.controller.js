import BlackList from "../models/blackList.models.js"
import { Captain } from "../models/captain.models.js"
import { createCaptain } from "../services/captain.service.js"
import { validationResult } from "express-validator"




export const captainRegiter = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    // console.log(req.body, "from captain");

    // Check if captain already exists
    const existingCaptain = await Captain.findOne({ email });
    if (existingCaptain) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    // Hash the password
    const hashedPass = await Captain.hashedPassword(password);

    // Create new captain
    const newCaptain = await createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname || null, // Handle optional lastname
      email,
      password: hashedPass,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    // Generate token
    const token = newCaptain.generateAuthCaptionToken();

    res.status(200).json({ token, newCaptain });
  } catch (error) {
    console.error("Error in captainRegister:", error.message);
    res.status(500).json({ message: error.message });
  }
};

 

// login captain

export const loginCaptain = async (req, res) =>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400),json({errors : errors.array()})
    }

    const {email,password} = req.body;
    console.log(email ,password);

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