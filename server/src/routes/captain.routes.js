import {Router} from 'express'
import {body} from 'express-validator' 
import { captainRegiter, getCaptainProfile, loginCaptain, logOutCaptain } from '../controllers/captain.controller.js'
import { captainAuth } from '../middlewares/auth.middleware.js'
const router = Router()


router.route('/register' ,[
    body('email').isEmail().withMessage("Email is required"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 character long"),
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be atleast 3 character long"),
    body('vehicle.color').isLength({min:3}).withMessage("Color must be atleast 3 character long"),
    body('vehicle.plate').isLength({min:3}).withMessage("Plate must be atleast 3 character long"),
    body('vehicle.capacity').isInt({min:1}).withMessage("Capacity must be atleast 1"),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Vehicle type must be car,motorcycle or auto")

]).post(captainRegiter)

// login captain

router.route('/login',[
    body('email').isEmail().withMessage("Email is required"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 character long"),
]).post( loginCaptain)


// get captian profile
router.route('/profile').get(captainAuth , getCaptainProfile)

// logout captain

router.route('/logout').get(captainAuth, logOutCaptain)

export default router