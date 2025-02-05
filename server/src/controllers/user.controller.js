import { User } from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import {validationResult} from 'express-validator'



export const registerUser = async (req,res,next) =>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() })
    }

    // console.log(req.body);
    const {fullname,email,password} = req.body;

    const isUserAlready = await User.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    }

    // hashing password
    const hashedPass = await User.hashPassword(password)

    // creating user

    const user = await createUser({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password : hashedPass
    })

    // createing token 
    const token = user.generateAuthToken()

    // return response
    res.status(201).json({token,user}) 

} 


// login 

export const userLogin = async ( req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const {email,password} = req.body
    // console.log("Login req.body:", req.body); // 

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const user = await User.findOne({email}).select('+password')


    if (!user) {
        return res.status(401).json({message :"Invalid email or password"})
    }

    const isCorrectPass = await user.comparePassword(password)

    if (!isCorrectPass) {
        return res.status(401).json({message : "Invalid email or password"})
    }

    // generating token 
    const token = await user.generateAuthToken()

    res.status(200).json({
        token,
        user
    })
}
