import jwt  from "jsonwebtoken";
import { User } from "../models/user.model.js";
import BlackList from "../models/blackList.models.js";
import { Captain } from "../models/captain.models.js";


export const authUser = async (req,res,next)  =>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]
    // console.log(token,"token from middlewares ");

    if (!token) {
            return res.status(401).json({message:"Unauthorized User !"})
        }

    const blackListToken = await BlackList.findOne({token : token}) 

    if (blackListToken)  {
        return res.status(401).json({message: "Unauthorized"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_tOKEN_SECRET)
        const user = await User.findById(decoded._id)
        if (!user){
            return res.status(401).json({message: "Unauthorized User"})
        }

        req.user = user
        return next()
        
    } catch (error) {
        return res.status(401).json({message:"Unauthorized User"})
    }


    
}


// captain auth middleware

export const captainAuth = async (req, res, next) => {
const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


    if (!token) {
        return res.status(401).json({ message: 'You are not Allow to view this page' });
    }

    const isBlacklisted = await BlackList.findOne({ token: token });



    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET_CAPTION);
        const captain = await Captain.findById(decoded._id)
        req.captain = captain;

        return next()
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
};
