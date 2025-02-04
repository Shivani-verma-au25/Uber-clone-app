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
