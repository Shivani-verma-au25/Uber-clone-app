import {Router} from 'express'
import {body} from 'express-validator'
import { getUserProfile, logOutUser, registerUser, userLogin } from '../controllers/user.controller.js'
import { authUser } from '../middlewares/auth.middleware.js'


const router = Router()


router.route('/register' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min : 3}).withMessage("First name must be atleast 3 character long"),
    body('fullname.lastname').isLength({min : 3}).withMessage("Last name must be atleast 3 character long"),
    body('passowrd').isLength({min:6}).withMessage('Password must be atleast 6 character long')
] ).post(registerUser)


//login 
router.route('/login' ,[
    body('email').isEmail().withMessage('Invalid Email'),
    body('passowrd').isLength({min:6}).withMessage('Password must be atleast 6 character long')
]).post(userLogin)


// user profile
router.route('/profile').get(authUser,getUserProfile)


// logout user
router.route('/logout').get((authUser, logOutUser))

export default router 